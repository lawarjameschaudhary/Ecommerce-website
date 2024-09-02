import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='bg-blue-500 text-white p-6 md:p-12 lg:p-24 font-fanta'>
      <div className='flex flex-col md:flex-row justify-around'>
        <div className="megamart w-full md:w-1/3">
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold'>Demo site</h1>
          <div className="contact-us mt-8 flex flex-col gap-5">
            <h2 className='text-xl md:text-2xl lg:text-3xl'>Contact Us</h2>
            <div className="whatsapp flex gap-2 items-center">
              <div className="image">
                <img src="./src/assets/whatsapp.png" alt="whatsapp" className='w-6 md:w-8' />
              </div>
              <div className="text">
                <h3 className='font-light text-sm md:text-base lg:text-lg'>+977 9824273887</h3>
              </div>
            </div>
            <div className="call flex gap-2 items-center">
              <div className="image">
                <img src="./src/assets/call.png" alt="call" className='w-6 md:w-8' />
              </div>
              <div className="text">
                <h3 className='font-light text-sm md:text-base lg:text-lg'>
                  <a href="tel:+9779824273887">+977 9824273887</a>
                </h3>
              </div>
            </div>
            <div className="gmail flex items-center gap-2">
              <div className="image">
                <img src="./src/assets/new.png" alt="gmail" className='w-6 md:w-8 bg-white rounded-md' />
              </div>
              <div className="text text-sm md:text-base lg:text-xl">
                <h3>
                  <a href="mailto:lawarjames67929@gmail.com">lawarjames67929@gmail.com</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="most-popular-categories w-full md:w-1/3 mt-8 md:mt-0">
          <h2 className='border-b-2 border-white p-2 text-xl md:text-2xl lg:text-3xl'>Most popular categories</h2>
          <div className='mt-5'>
            <ul className='list-disc flex flex-col gap-2 text-sm md:text-base lg:text-xl ml-5'>
              <li>Staples</li>
              <li>Mobile phones</li>
              <li>Laptops</li>
              <li>Accessories</li>
              <li>Covers</li>
            </ul>
          </div>
        </div>
        <div className="customer-service w-full md:w-1/3 mt-8 md:mt-0">
          <h2 className='border-b-2 border-white p-2 text-xl md:text-2xl lg:text-3xl'>Customer service</h2>
          <div className='mt-5'>
            <ul className='list-disc flex flex-col gap-2 text-sm md:text-base lg:text-xl ml-5'>
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Covers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-slate-50 flex justify-center py-2'>
      <h1 className='font-extralight text-gray-500'>&copy; Created by | Lawar James Chaudahry</h1>
    </div>
    </div>
  );
}

export default Footer;
