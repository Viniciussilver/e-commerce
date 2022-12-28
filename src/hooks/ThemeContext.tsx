import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

import { DefaultTheme } from 'styled-components';
import light from '../styles/themes/light';

type CartProviderProps = {
  children: ReactNode;
};

type ContextType = {
  theme: DefaultTheme;
  setTheme: (e: DefaultTheme) => void;
};

const ThemeContext = createContext({} as ContextType);

export const ThemeContextProvider = ({ children }: CartProviderProps) => {
  const [theme, setTheme] = useState(() => {
    const themeSaved = localStorage.getItem('@theme');

    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return light;
    }
  });

  useEffect(() => {
    localStorage.setItem('@theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error();
  }

  return context;
};
