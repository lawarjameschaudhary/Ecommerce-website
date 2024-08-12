import React, { useEffect, useState } from 'react'
import ProductCard from './productCard';

const Product = () => {
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts(data);
  } 
  useEffect(() => {
    getProduct();
  },[]);
  return (
   <div>
     <div className='flex flex-wrap justify-center gap-12 items-center py-12'>
     {products.map((item, index) => {
          return <ProductCard data={item} key={index} />;
        })}
    </div>
   </div>
  )
}

export default Product;