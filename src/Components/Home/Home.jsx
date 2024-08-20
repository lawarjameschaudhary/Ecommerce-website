import React from 'react'
import Product from '../Products/Product'
import ProductSlider from '../ProductSlider/ProductSlider'

function Home() {
  return (
    <div className='mt-11' >
      <div className='mt-28'>
      <ProductSlider />
      </div>
        <div className='mt-20'>
        <Product />
        </div>
    </div>
  )
}

export default Home