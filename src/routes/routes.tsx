import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Products } from '../containers/'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/produtos' element={<Products />} />
      </Routes>
    </Router>
  )
}

export default App
