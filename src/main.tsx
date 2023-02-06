import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import App from './routes/routes';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/Auth';
import GlobalStyles from './styles/global.styles';
import { CartContextProvider } from './contexts/CartContext';
import { ModalAlert } from './components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <AuthProvider>
        <CartContextProvider>
          <App />
          <ModalAlert />
        </CartContextProvider>
      </AuthProvider>
    </ThemeContextProvider>
    <GlobalStyles />
    <Toaster
      position='top-left'
      containerStyle={{
        top: 75,
        left: 20,
      }}
      toastOptions={{ duration: 2000 }}
    />
  </BrowserRouter>
);
