import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from 'react';
import toast from 'react-hot-toast';
import { ProductType } from '../@types/Product';

type CartProviderProps = {
  children: ReactNode;
};

type ContextType = {
  cartItems: ProductType[];
  putProductsInCart: (item: ProductType) => void;
  cartQuantity: number;
  cartOpen: boolean;
  setCartOpen: (e: boolean) => void;
  increaseProducts: (item: ProductType) => void;
  decreaseProducts: (item: ProductType) => void;
  removeItem: (item: ProductType) => void;
  resetCart: () => void;
  total: number;
  subTotal: number;
};

export const frete = 35;

const CartContext = createContext({} as ContextType);

export const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [cartItems, setCartItems] = useState<ProductType[]>(() => {
    const storedStateAsJSON = localStorage.getItem('@e-commerce:cartInfo');

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return [];
  });

  const cartQuantity = cartItems.length;

  useEffect(() => {
    localStorage.setItem('@e-commerce:cartInfo', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const totalSum = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

    setSubTotal(totalSum);

    if (totalSum > 250) {
      setTotal(totalSum);
    } else {
      setTotal(totalSum + frete);
    }
  }, [cartItems]);

  const putProductsInCart = (product: ProductType) => {
    const index = cartItems.some(item => item.id === product.id);

    if (!index) {
      setCartItems([...cartItems, product]);
      toast.success('Produto adicionado ao carrinho');
    } else {
      toast('Produto já foi adicionado', {
        icon: '⏩',
      });
    }
  };

  const increaseProducts = (product: ProductType) => {
    const newCart = cartItems.map(item => {
      return item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });

    setCartItems(newCart);
  };

  const decreaseProducts = (product: ProductType) => {
    if (product.quantity === 1) return;

    const newCart = cartItems.map(item => {
      return item.id === product.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });

    setCartItems(newCart);
  };

  const removeItem = (product: ProductType) => {
    const newCart = cartItems.filter(item => item.id !== product.id);
    setCartItems(newCart);
  };

  const resetCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        putProductsInCart,
        cartQuantity,
        setCartOpen,
        cartOpen,
        increaseProducts,
        decreaseProducts,
        removeItem,
        resetCart,
        total,
        subTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('Fora do contexto');
  }

  return context;
};
