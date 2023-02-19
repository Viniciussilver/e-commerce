import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Rotas from './routes/routes';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/Auth';
import GlobalStyles from './styles/global.styles';
import { CartContextProvider } from './contexts/CartContext';
import { ModalAlert } from './components';

const App = () => {
  //
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <CartContextProvider>
          <AuthProvider>
            <Rotas />
            <ModalAlert />
          </AuthProvider>
        </CartContextProvider>
      </ThemeContextProvider>
      <GlobalStyles />
      <Toaster
        position='top-left'
        containerStyle={{
          top: 70,
          left: 20,
        }}
        toastOptions={{ duration: 2000 }}
      />
    </BrowserRouter>
  );
};

export default App;
