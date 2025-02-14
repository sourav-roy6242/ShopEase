import { useState } from 'react'
import Register from './pages/registerPage'
import HomePage from './pages/Homepage'
import ContactUs from './pages/Contactus'
<<<<<<< HEAD
import AboutUs from './pages/AboutUs'
=======
import ContactUs from './pages/Contactus'
import Shopregister from './pages/Shopregister'
>>>>>>> 09a5b5c06eac0170a12fd38a09df679439d4d5ca
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
    <div>
      <HomePage />
      <AboutUs />

      
       {/* <Register /> */}
    </div>
=======
   <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/shopregister" element={<Shopregister />} />
      <Route path="/register" element={<Register />} />
    </Routes>
   </Router>
>>>>>>> 09a5b5c06eac0170a12fd38a09df679439d4d5ca
  )
}

export default App
