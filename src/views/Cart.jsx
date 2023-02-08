import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { remove } from '../store/Cartslice';

function Cart() {
  const dispatch = useDispatch()
  const product = useSelector((state)=> state.cart);
  const handleRemove = (productId) =>{
dispatch(remove(productId))
  }
  console.log(product);
  return (
  <>
    <div className='text-center text-slate-600 font-bold text-5xl '>Cart</div>
    <div className='flex font-bold uppercase my-5'>
      <p className='m-auto'>image</p>
      <p className='m-auto'>title</p>
      <p className='m-auto'>price</p>
      <p className='m-auto'>Remove</p>
    </div>
    
    {
      product.map(product => (
        <div className="flex border rounded shadow-xl pt-10"  key={product.id}>
        <img src={product.image} className="w-[50px] m-auto pb-6" alt="" />
        <h5 className=' m-auto '> {product.title}</h5>
        <h5 className=' m-auto '>{product.price}</h5>
        <button type='button' className='m-auto  flex text-gray-500 duration-1000   hover:bg-purple-500 p-3 rounded hover:text-gray-50 ' onClick={()=>handleRemove(product.id)}> Remove</button>
        </div>
      ))
    }
    </>
  )
}

export default Cart