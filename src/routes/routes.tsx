import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { CheckoutForm, Products, Register, SignIn } from '../containers/';
import paths from '../utils/paths';
import { useThemeContext } from '../contexts/ThemeContext';
import PrivateRoute from './PrivateRoute';

const Rotas = () => {
  //
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={paths.products} element={<Products />} />
        <Route
          path={paths.login}
          element={
            <PrivateRoute isRegister>
              <SignIn />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.register}
          element={
            <PrivateRoute isRegister>
              <Register />
            </PrivateRoute>
          }
        />
        <Route
          path={paths.checkout}
          element={
            <PrivateRoute isPrivate>
              <CheckoutForm />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Navigate to={paths.products} />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Rotas;
