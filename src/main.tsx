import React from 'react'
import ReactDOM from 'react-dom/client'

import Routes from './routes/routes'
import { GlobalStyles } from './styles/global.styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes /> <GlobalStyles />
  </React.StrictMode>
)
