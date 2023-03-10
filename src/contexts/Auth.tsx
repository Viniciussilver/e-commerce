import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import firebase from '../services/firebase';
import paths from '../utils/paths';
import { useCart } from './CartContext';

interface ISignUp {
  name: string;
  email: string;
  password: string;
}

interface IAuthContext {
  signIn: (data: { email: string; password: string }) => void;
  signUp: (data: ISignUp) => void;
  signOut: () => void;
  loadingAuth: boolean;
  user: UserTypes | null;
  isOpenModal: boolean;
  toggleModal: () => void;
}

interface IAuthProvider {
  children: ReactNode;
}

type UserTypes = {
  uid: string;
  name: string;
  email: string;
};

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const { resetCart } = useCart();
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [user, setUser] = useState<UserTypes | null>(() => {
    const getUser = localStorage.getItem('@AuthUser');

    if (getUser) {
      return JSON.parse(getUser);
    }
    resetCart();
    return null;
  });

  const navigate = useNavigate();

  useEffect(
    () => localStorage.setItem('@AuthUser', JSON.stringify(user)),
    [user]
  );

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const signIn = async (data: { email: string; password: string }) => {
    setLoadingAuth(true);

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(async value => {
          await firebase
            .firestore()
            .collection('infoUsers')
            .doc(value.user?.uid)
            .get()
            .then(infoUser => {
              setLoadingAuth(false);
              console.log(infoUser.data());

              if (!infoUser.exists) {
                return toast.error('Verifique seu e-mail e senha');
              }

              toast.success('Seja bem vindo(a)');

              setTimeout(() => {
                navigate(paths.products);

                setUser({
                  uid: value.user?.uid as string,
                  name: infoUser.data()?.name,
                  email: infoUser.data()?.email,
                });
              }, 1000);
            });
        });
    } catch (err) {
      setLoadingAuth(false);

      console.log(err);

      toast.error('Verifique seu e-mail e senha');
    }
  };

  const signUp = async (data: ISignUp) => {
    setLoadingAuth(true);

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(async res => {
          await firebase
            .firestore()
            .collection('infoUsers')
            .doc(res.user?.uid)
            .set({
              name: data.name,
              email: data.email,
              pedidos: null,
            })
            .then(() => {
              setLoadingAuth(false);

              toast.success('Cadastro criado com sucesso');

              setTimeout(() => {
                navigate(paths.login, {
                  state: { email: data.email, password: data.password },
                });
              }, 1000);
            });
        });
    } catch (err) {
      console.log(err);

      toast.error('E-mail j?? cadastrado');
      setLoadingAuth(false);
    }
  };

  const signOut = async () => {
    await firebase.auth().signOut();
    //

    window.location.reload();
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        user,
        loadingAuth,
        isOpenModal,
        toggleModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Fora do contexto');
  }

  return context;
};
