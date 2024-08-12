import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Footer from './Components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <div className=''>
      <Toaster />
      <Navbar />
    <div className='px-[10px] md:px-[100px] font-laiber-font py-[20px]'>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    <Footer />
   </div>
  )
}

export default App