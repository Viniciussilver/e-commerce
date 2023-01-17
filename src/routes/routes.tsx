import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Products } from '../containers/'

import { CartContextProvider } from '../hooks/CartContext'
import GlobalStyles from '../styles/global.styles'

import { ThemeProvider } from 'styled-components'

import paths from '../utils/paths'
import { useThemeContext } from '../hooks/ThemeContext'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.products} element={<Products />} />
          <Route path='*' element={<Navigate to={paths.home} />} />
        </Routes>
        <GlobalStyles />
        <ToastContainer theme='dark' autoClose={1850} position='top-left' />
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
