import { Route, Routes } from 'react-router-dom'
import './App.css'
import TaxCalculator from './pages/TaxCalculator'
import About from './pages/About'
import LT from './pages/LT'



function App() {

  return (
    <Routes>
      <Route path='/' element={<TaxCalculator />} />
      <Route path='/luat-thue' element={<LT />} />
      <Route path='/ve-chung-toi' element={<About />} />
    </Routes>
  )
}

export default App
