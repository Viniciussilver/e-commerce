import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import App from './routes/routes'
import { ThemeContextProvider } from './hooks/ThemeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
    <ToastContainer theme='dark' autoClose={1850} position='top-left' />
  </BrowserRouter>
)
