import { useState } from 'react'
import Register from './pages/registerPage'
import HomePage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomePage />
      <AboutUs />

      
       {/* <Register /> */}
    </div>
  )
}

export default App
