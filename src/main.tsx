import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './routes/routes';

import { ThemeContextProvider } from './hooks/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
