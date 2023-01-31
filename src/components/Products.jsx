import React from 'react'
import { Loading } from './loading'
import { useQuery } from 'react-query'
import { add } from '../store/Cartslice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
const fetchProducts = async ()=>{
    return await axios.get('https://fakestoreapi.com/products') 
 //    console.log(res);

}
const Products = () =>{
    const dispatch = useDispatch();
            // const [products, setProducts] = useState([]);
        const {data,isLoading , isFetching} = useQuery('productfetch',fetchProducts)    
        console.log('isFecthing',isFetching, 'isLoading',isLoading , 'data',data);

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
            data.data?.map(data=>(
                <div className='p-20 bg-white rounded-lg text-center items-center justify-center ' key={data.id}>

                    <img src={data.image} className=' ml-auto mr-auto w-24 items-center justify-center' alt="" />
                    <h4 className='font-bold py-4'>{data.title}</h4>
                    <h4 className='font-semibold py-4'>RS.{data.price}</h4>
                    <button onClick={handleAdd} className='hover:bg-btn ease-in-out duration-300 bg-purple-600 cursor-pointer font-bold rounded-md text-gray-100 py-1 px-2'>Add to Cart</button>
                     </div>
            ))

        }
    </div>
  )

}
export default Products