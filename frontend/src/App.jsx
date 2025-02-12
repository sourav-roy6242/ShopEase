import { useState } from 'react'
import Register from './pages/registerPage'
import HomePage from './pages/Homepage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomePage />
       {/* <Register /> */}
    </div>
  )
}

export default App
