import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from 'react';
import { DefaultTheme } from 'styled-components';

import Light from '../styles/themes/light';
import Dark from '../styles/themes/dark';

interface IThemeProvider {
  children: ReactNode;
}

interface IContext {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IContext);

export const ThemeContextProvider = ({ children }: IThemeProvider) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>(() => {
    const themeSaved = localStorage.getItem('@theme');

    if (themeSaved) {
      return themeSaved as 'light' | 'dark';
    } else {
      return 'light';
    }
  });

  const toggleTheme = () =>
    setThemeName(theme => (theme === 'light' ? 'dark' : 'light'));

  const theme = useMemo(() => {
    return themeName === 'light' ? Light : Dark;
  }, [themeName]);

  useEffect(() => {
    localStorage.setItem('@theme', themeName);
  }, [themeName]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Fora do contexto');
  }

  return context;
};
