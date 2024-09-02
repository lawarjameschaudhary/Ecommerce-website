import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [navButtons, setNavButtons] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products/");
        const data = await response.json();
        setAllProducts(data.title);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (value) => {
    setInput(value);
    if (value.trim() === '') {
      setResults([]);
    } else {
      const filteredResults = allProducts.filter((products) =>
        products.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    }
  };
  const toggleButton = () => {
    setNavButtons(!navButtons)
  }

  return (
    <div className='flex justify-between items-center shadow-2xl shadow-blue-100 px-1 md:px-7 py-2 bg-white gap-1 md:gap-5'>
      <div className='logo flex items-center gap-5'>
        <div className='img'>
          {/* <img src="./src/assets/menu.png" alt="" className='w-8' /> */}
        </div>
        <div className='logo text-xl md:text-3xl font-extrabold text-blue-400 font-fanta'>
          <NavLink to='/'>Demo site</NavLink>
        </div>
      </div>
      <div className='search-engine border-2 rounded-full border-blue-400 relative'>
        <input
          type='search'
          name='search'
          id='search'
          className='rounded-full w-[150px] md:w-[300px] h-4 md:h-8 px-5 md:px-8 outline-none'
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          placeholder='Search'
        />
        <img
          src='./src/assets/search.png'
          alt=''
          className='w-3 md:w-4 absolute top-[25%] left-[3%]'
        />
        {input && (
          <div className='search-results absolute bg-white border border-gray-300 rounded-md w-full mt-2 max-h-60 overflow-auto z-10'>
            {results.length > 0 ? (
              results.map((result) => (
                <div key={result.title} className='search-result-item px-4 py-2 hover:bg-gray-200'>
                  <NavLink to={`/products/${result.title}`} className='block text-blue-500'>
                    {result.name}
                  </NavLink>
                </div>
              ))
            ) : (
              <div className='px-4 py-2 text-gray-500'>No results found</div>
            )}
          </div>
        )}
      </div>
      <div>
      <button
            onClick={toggleButton}
            className='rounded-2xl p-2 md:p-4  hover:via-blue-800 hover:to-blue-950 transition-all duration-300 hover:scale-105 focus:outline-none hover:-translate-y-[2px] flex md:hidden'
          >
            <img src='./src/assets/open-menu.png' alt='navigation bar' className='w-[30px] md:w-[35px]' />
          </button>
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
      {
        navButtons && (
          <div className='fixed top-14 right-2 bg-gray-200 rounded-2xl w-[180px] md:w-[250px] h-[40%] text-left p-4 z-50'>
          <ul className='space-y-4'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/cart'>Cart</NavLink></li>
            <li><NavLink to='/admin'>Admin</NavLink></li>
            <li ><NavLink to='/about'>About</NavLink></li>
            <li></li>
          </ul>
        </div>
        )
      }
    </div>
  );
};

export default Navbar;
