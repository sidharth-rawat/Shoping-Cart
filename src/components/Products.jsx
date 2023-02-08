import React from 'react'
import { Loading } from './loading'
import { useQuery } from 'react-query'
import { add } from '../store/Cartslice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
const fetchProducts = async ()=>{
    
    console.log('Backend Call');
    return await axios.get('https://fakestoreapi.com/products') 

}
const Products = () =>{
    const dispatch = useDispatch();
            // const [products, setProducts] = useState([]);
        const {data,isLoading , } = useQuery('productfetch',fetchProducts)    
        const products = data;
        // console.log('isFecthing',isFetching, 'isLoading',isLoading , 'data',data);

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
            products.data?.map(_product=>(
                <div className='p-20 bg-white rounded-lg text-center items-center justify-center ' key={_product.id}>

                    <img src={_product.image} className=' ml-auto mr-auto w-24 items-center justify-center' alt="" />
                    <h4 className='font-bold py-4'>{_product.title}</h4>
                    <h4 className='font-semibold py-4'>RS.{_product.price}</h4>
                    <button onClick={()=>handleAdd(_product)} className='hover:bg-btn ease-in-out duration-300 bg-purple-600 cursor-pointer font-bold rounded-md text-gray-100 py-1 px-2'>Add to Cart</button>
                     </div>
            ))

        }
    </div>
  )

}
export default Products