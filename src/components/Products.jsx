import React, { useEffect, useState } from 'react'
import { Loading } from './loading'
import { useQuery } from 'react-query'
import { add } from '../store/Cartslice'
import { useDispatch } from 'react-redux'
const Products = () =>{
    const dispatch = useDispatch();
       const fetchProducts = async()=>{
           const res = await (await fetch('https://fakestoreapi.com/products')).json()
        //    console.log(res);
           setProducts(res)
           
               dispatch(res.data)
       }



        const [products, setProducts] = useState([]);
        const ONE_SEC = 1000;
        const FIVE_MINUTE = ONE_SEC * 60 * 5;
        const {isLoading , isFetching} = useQuery('productfetch',fetchProducts,
        {
            enabled: true,
            cacheTime:FIVE_MINUTE,
            // staleTime:FIVE_MINUTE,
            retry: 2,
            retryDelay: ONE_SEC,
            refetchInterval: FIVE_MINUTE,
            refetchOnWindowFocus: false,
        })    
        console.log('isFecthing',isFetching, 'isLoading',isLoading);

    if(isLoading){
        return <Loading/>
    }
    const handleAdd =(product)=>{
        dispatch(add(product))
        console.log(handleAdd)
    }
  return (
    <div className=' grid  gap-4 grid-cols-3 grid-rows-3 justify-center items-center'>
        {
            products.map(products=>(
                <div className='p-20 bg-white rounded-lg text-center items-center justify-center ' key={products.id}>

                    <img src={products.image} className=' ml-auto mr-auto w-24 items-center justify-center' alt="" />
                    <h4 className='font-bold py-4'>{products.title}</h4>
                    <h4 className='font-semibold py-4'>RS.{products.price}</h4>
                    <button onClick={handleAdd} className='hover:bg-btn ease-in-out duration-300 bg-purple-600 cursor-pointer font-bold rounded-md text-gray-100 py-1 px-2'>Add to Cart</button>
                     </div>
            ))

        }
    </div>
  )

}
export default Products