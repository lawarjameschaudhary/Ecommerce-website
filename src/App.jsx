import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './Components/Home/Home'
function App() {
  return (
    <div className='px-[10px] md:px-[100px] font-laiber-font py-[20px]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
   </div>
  )
}

export default App