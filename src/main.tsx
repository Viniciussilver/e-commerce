import ReactDOM from 'react-dom/client';

import { BrowserRouter }  from 'react-router-dom';

import App from './routes/routes';

import { ThemeContextProvider } from './hooks/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </BrowserRouter>
);
