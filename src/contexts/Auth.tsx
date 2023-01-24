import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import firebase from '../services/firebase';
import paths from '../utils/paths';

type SignUpTypes = {
  name: string;
  email: string;
  password: string;
};

type AuthContextTypes = {
  signIn: (data: { email: string; password: string }) => void;
  signUp: (data: SignUpTypes) => void;
  signOut: () => void;
  loadingAuth: boolean;
  user: UserTypes | null;
  isOpenModal: boolean;
  toggleModal: () => void;
};

type AuthProviderTypes = {
  children: ReactNode;
};

type UserTypes = {
  uid: string;
  name: string;
  email: string;
};

const AuthContext = createContext({} as AuthContextTypes);

export const AuthProvider = ({ children }: AuthProviderTypes) => {
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [user, setUser] = useState<UserTypes | null>(() => {
    const getUser = localStorage.getItem('@AuthUser');

    if (getUser) {
      return JSON.parse(getUser);
    }

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
                toast.error('Verifique seu e-mail e senha', {
                  autoClose: 2000,
                });
              } else {
                setUser({
                  uid: value.user?.uid as string,
                  name: infoUser.data()?.name,
                  email: infoUser.data()?.email,
                });

                toast.success('Seja bem vindo(a)', {
                  autoClose: 2000,
                });

                setTimeout(() => navigate(paths.products), 1000);
              }
            });
        });
    } catch (err) {
      setLoadingAuth(false);

      console.log(err);

      toast.error('Verifique seu e-mail e senha', {
        autoClose: 2000,
      });
    }
  };

  const signUp = async (data: SignUpTypes) => {
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
            })
            .then(() => {
              setLoadingAuth(false);

              toast.success('Cadastro criado com sucesso', {
                autoClose: 1600,
              });

              setTimeout(() => {
                navigate(paths.login, {
                  state: { email: data.email, password: data.password },
                });
              }, 1000);
            });
        });
    } catch (err) {
      console.log(err);

      toast.error('E-mail já cadastrado', {
        autoClose: 1900,
      });
      setLoadingAuth(false);
    }
  };

  const signOut = () => {
    firebase.auth().signOut();
    //
    localStorage.clear();
    setUser(null);

    window.location.reload();
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
