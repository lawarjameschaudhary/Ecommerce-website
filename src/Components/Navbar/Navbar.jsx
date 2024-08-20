import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const result = json.filter((user) => {
          return user && user.name && user.name.toLowercase().includes(value);
        })
        console.log(result)
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className='flex justify-between items-center shadow-2xl shadow-blue-100 px-7 py-2 bg-white'>
      <div className='logo flex items-center gap-5'>
        <div className='img'>
          {/* <img src="./src/assets/menu.png" alt="" className='w-8' /> */}
        </div>
        <div className='logo text-3xl font-extrabold text-blue-400 font-fanta'>
          <NavLink to='/'>Demo site</NavLink>
        </div>
      </div>
      <div className='search-engine border-2 rounded-full border-blue-400 relative'>
        <input
          type='search'
          name='search'
          id='search'
          className='rounded-full w-[200px] md:w-[300px] h-8 px-4 md:px-8 outline-none'
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          placeholder='Search'
        />
        <img
          src='./src/assets/search.png'
          alt=''
          className='w-4 absolute top-[25%] left-[3%]'
        />
      </div>
      <div className='Nav-list md:flex justify-between gap-20 font-fanta text-xl text-blue-400 px-8 hidden'>
        <div className='home-page flex items-center gap-2 hover:text-blue-500'>
          <img src='./src/assets/home.png' alt='home icon' className='w-5' />
          <NavLink className='links font-semibold' to='/'>
            Home
          </NavLink>
        </div>

        <div className='cart flex items-center gap-2 hover:text-blue-500'>
          <div className='image'>
            <img
              src='./src/assets/add-to-cart.png'
              alt='cart icon'
              className='w-6'
            />
          </div>
          <div className='text font-semibold'>
            <NavLink className='links' to='/cart'>
              Cart
            </NavLink>
          </div>
        </div>

        <div className='admin-page flex items-center gap-2 hover:text-blue-500'>
          <img src='./src/assets/user.png' alt='admin icon' className='w-5' />
          <NavLink className='links font-semibold' to='/admin'>
            Admin
          </NavLink>
        </div>

        <NavLink className='links font-semibold hover:text-blue-500' to='/about'>
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
