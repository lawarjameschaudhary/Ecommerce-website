import React from 'react'
import { useState, useEffect } from 'react'
import CartCard from './CartaCard';

const Cart = () => {
const [cartdata, setcCartdata] = useState([]);
const fetchCartdata = async () => {
  const response = await fetch('http://localhost:3000/carts');
  const data = await response.json();
  setcCartdata(data);
};
useEffect(() => {
  fetchCartdata();
},[]);
  return (
    <div className='flex  flex-wrap gap-20 justify-center mt-14'>
      {cartdata.length === 0 ? (
        <div className='mt-[100px]'>
          No items in the cart
        </div>
      ) :
      (
        cartdata.map(
          (item) => {
            return <CartCard fetchCartdata={fetchCartdata} data={item} />
          }
        )
      )
      }
    </div>
  )
}

export default Cart