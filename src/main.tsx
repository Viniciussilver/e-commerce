import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <ToastContainer theme='dark' autoClose={1850} position='top-left' />
  </BrowserRouter>
);
