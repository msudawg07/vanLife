import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav className='nav-top'>
        <div><Link to='/' className='nav-vanlife'>#VANLIFE</Link></div>
        <div className='nav-right'>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <nav className='footer'>
        <div>@2025 #VANLIFE</div>
      </nav>
    </BrowserRouter>
  )
}

export default App
