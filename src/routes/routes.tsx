import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home, Products, Register, SignIn } from '../containers/';
import { CartContextProvider } from '../contexts/CartContext';
import paths from '../utils/paths';
import { useThemeContext } from '../contexts/ThemeContext';

const App = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.products} element={<Products />} />
        <Route path={paths.login} element={<SignIn />} />
        <Route path={paths.register} element={<Register />} />
        <Route path='*' element={<Navigate to={paths.home} />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
