import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home, Products, Register, SignIn } from '../containers/';
import { CartContextProvider } from '../hooks/CartContext';
import GlobalStyles from '../styles/global.styles';
import paths from '../utils/paths';
import { useThemeContext } from '../hooks/ThemeContext';

const App = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.products} element={<Products />} />
          <Route path='*' element={<Navigate to={paths.home} />} />
          <Route path={paths.login} element={<SignIn />} />
          <Route path={paths.register} element={<Register />} />
        </Routes>
        <GlobalStyles />
      </CartContextProvider>
    </ThemeProvider>
  );
};

export default App;
