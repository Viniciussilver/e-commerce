import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Products } from '../containers/';

import { CartContextProvider } from '../hooks/CartContext';
import GlobalStyles from '../styles/global.styles';

import { ThemeProvider } from 'styled-components';

import paths from '../utils/paths';
import { useThemeContext } from '../hooks/ThemeContext';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme.title === 'light' ? light : dark}>
      <CartContextProvider>
        <Router>
          <Routes>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.products} element={<Products />} />
          </Routes>
        </Router>
        <GlobalStyles />
        <ToastContainer theme='dark' autoClose={1850} position='top-left' />
      </CartContextProvider>
    </ThemeProvider>
  );
};

export default App;
