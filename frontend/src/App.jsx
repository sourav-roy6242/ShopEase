import { useState } from 'react'
import Register from './pages/registerPage'
import HomePage from './pages/Homepage'
import ContactUs from './pages/Contactus'
import Shopregister from './pages/Shopregister'
import AboutUs from './pages/AboutUs'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/shopregister" element={<Shopregister />} />
      <Route path="/register" element={<Register />} />
      <Route path="/AboutUs" element={<AboutUs />} />
    </Routes>
   </Router>
  )
}

export default App