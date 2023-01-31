import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
  const product = useSelector((state)=> state.cart);
  console.log(product);
  return (
  <>
    <div>Cart</div>
    {
      product.map(product => (
        // <img src={product.cart} alt="" />
        <div className=""  key={product.id}>
        <h5>{product.title}</h5>
        <h5>{product.price}</h5>
        </div>
      ))
    }
    </>
  )
}

export default Cart