import React from 'react'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Footer from './Components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
import Admin from './Components/Admin/Admin'
import Login from './Components/Login/Login'
import AdminAdd from './Components/Admin/AdminAdd'
import Editproduct from './Components/Admin/Editproduct'

function App() {
  const location = useLocation();
  return (
    <div className=''>
      <Toaster />
      <div className='fixed right-0 left-0 z-10'>
      {location.pathname !== "/login" && <Navbar />}
      </div>
    <div className='px-[10px] md:px-[100px] font-laiber-font py-[20px]'>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin/add' element={<AdminAdd />} />
        <Route path='admin/edit/:id' element={<Editproduct />} />
      </Routes>
    </div>
    <Footer />
   </div>
  )
}

export default App