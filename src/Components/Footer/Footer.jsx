import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around bg-blue-500  text-white p-24 font-fanta'>
        {/* <div className='flex  justify-between'> */}
            <div className="megamart">
                <h1 className='text-5xl font-extrabold'>Demo site</h1>
                <div className="contact-us mt-8 flex flex-col gap-5">
                    <h1 className='text-3xl'>Contact Us</h1>
                    <div className="whatsapp flex gap-2 items-center">
                        <div className="image">
                        <img src="./src/assets/whatsapp.png" alt="whatsapp" className='w-8' />
                        </div>
                        <div className="text">
                            <h1 className='font-extralight'>+977 9824273887</h1>
                        </div>
                    </div>
                    <div className="call flex gap-2 items-center">
                        <div className="image">
                        <img src="./src/assets/call.png" alt="whatsapp" className='w-8' />
                        </div>
                        <div className="text">
                            <h1 className='font-extralight'><a href="tel:+977 9824273887">+977 9824273887</a></h1>
                        </div>
                    </div>
                    <div className="gmail flex items-center gap-2">
                        <div className="image">
                        <img src="./src/assets/new.png" alt="whatsapp" className='w-8 bg-white rounded-md' />
                        </div>
                        <div className="text text-xl">
                            <h1><a href="mailto:lawarjames67929@gmail.com">lawarjames67929@gmail.com</a></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="most-popular-catagories">
                <h1 className='border-b-2 border-white p-2 text-3xl'>Most popular catagories</h1>
                <div className='mt-5  ml-9 '>
                    <ul className='list-disc flex flex-col gap-2 tex-xl'>
                        <li>Staples</li>
                        <li>Mobile phone</li>
                        <li>Laptops</li>
                        <li>Accessories</li>
                        <li>Cover</li>
                    </ul>
                </div>
            </div>
            <div className="customer-service">
                <h1 className='border-b-2 border-white p-2 text-3xl'>Customer service</h1>
                <div className='mt-5 text- ml-9'>
                    <ul className='list-disc flex flex-col tex-xl gap-2'>
                        <li>About Us</li>
                        <li>Terms & Condition</li>
                        <li>Privacy & Policy</li>
                        <li>FAQ</li>
                        <li>Cover</li>
                    </ul>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Footer