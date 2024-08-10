import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <div className="logo">
        <img src="./src/assets/react.svg" alt="" className='w-10' />
      </div>
      <div className="Nav-list sm:flex justify-between gap-20 text-xl font-extralight hidden">
      <NavLink className='links' to='/'>Home</NavLink>
       <NavLink className='links' to='/cart'>Cart</NavLink>
       <NavLink className='links' to='/admin'>Admin</NavLink>
       <NavLink className='links' to='/about'>About</NavLink>
      </div>
    </div>
  )
}

export default Navbar