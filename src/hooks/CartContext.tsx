import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

export type CartItemTypes = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};

type CartProviderProps = {
  children: ReactNode;
};

type ContextType = {
  cartItems: CartItemTypes[];
  putProductsInCart: (item: CartItemTypes) => void;
  cartQuantity: number;
  cartOpen: boolean;
  setCartOpen: (e: boolean) => void;
  increaseProducts: (item: CartItemTypes) => void;
  decreaseProducts: (item: CartItemTypes) => void;
  removeItem: (item: CartItemTypes) => void;
};

const CartContext = createContext({} as ContextType);

export const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemTypes[]>(() => {
    const storedStateAsJSON = localStorage.getItem('@e-commerce:cartInfo');

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    } else {
      return [];
    }
  });

  const cartQuantity = cartItems.length;

  useEffect(() => {
    localStorage.setItem('@e-commerce:cartInfo', JSON.stringify(cartItems));
  }, [cartItems]);

  const putProductsInCart = (product: CartItemTypes) =>
    setCartItems([...cartItems, product]);

  const increaseProducts = (product: CartItemTypes) => {
    const newCart = cartItems.map(item => {
      return item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });

    setCartItems(newCart);
  };

  const decreaseProducts = (product: CartItemTypes) => {
    if (product.quantity === 1) return;

    const newCart = cartItems.map(item => {
      return item.id === product.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });

    setCartItems(newCart);
  };

  const removeItem = (product: CartItemTypes) => {
    const newCart = cartItems.filter(item => item.id !== product.id);
    setCartItems(newCart);
  };

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error();
  }

  return context;
};
