import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const Header=()=> {
    const items = useSelector((state)=>state.cart)
  return (
    <div className='px-10 py-5 font-medium bg-gray-400 flex flex-row   justify-between'>
    <span>Redux Store</span>
    <div className="">
        <Link to='/' className='mr-5 font-medium'>Home</Link>
        <Link to='cart' className='mr-5 font-medium'>Cart</Link>
        <span className='font-bold'> Cart Iteam :{items.length} </span>
    </div>
    </div>
  )
}
