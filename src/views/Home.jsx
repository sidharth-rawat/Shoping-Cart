import React from 'react'
import Products from '../components/Products'

function Home() {
  return (
    <>
    <h1 className='font-bold  text-[50px]  mr-0 py-[25px] px-0 '> Welcome to store </h1>
   
    <section >
        <h3 className='text-center font-bold text-[25px] justify-center '>Products</h3>
        <Products/>
    </section>
    </>
  )
}

export default Home