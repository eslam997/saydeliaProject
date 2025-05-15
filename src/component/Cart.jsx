import React from 'react'
//import { cartcontext } from './context/Cartcontext'
import { useContext } from 'react'
import ProductContext from '../context/ProductContext'
const Cart = () => {
  const{ items,inq,deq,totalprice,removeItem }=useContext(ProductContext)
  return (
    <div> 
      <h1 className='text-2xl font-bold text-center mb-4 '>cart</h1>
      {items.length===0 ? <h1 className='text-red-500 text-center text-4xl'>NO Product In Cart </h1>:(
        <div className='grid grid-col-1 gap-4 p-6 '>
        {items.map((itme)=>(
          <div key={itme._id} className='border rounded-lg p-4 shadow-md flex flex-row items-center justify-between'>
            <img src={itme.image} alt={itme.title} className='w-32 h-32 object-cover mb-2 rounded-md'/>
            <h1 className='font-bold'>{itme.title}</h1>
            <h1 className='text-gray-600'>${itme.price}</h1>
            <div className='flex items-center mt-2'>
            <button className='lone text-white px-2 py-1 rounded-full w-7 h-7' onClick={()=>inq(itme._id) }> +</button>
            <h1 className='px-4'>{itme.quantity}</h1>
            <button className='lone text-white px-2 py-1 rounded-full w-7 h-7 ' onClick={()=>deq(itme._id) }> -</button>
            </div>
            <button className='lone text-white px-2 py-1 rounded-md' onClick= {()=> removeItem(itme._id)}> 
              Delete
            </button>
          </div>

        ))}
        <h1 className='text-2xl font-bold m-10'>total:${totalprice()} </h1>
        </div> 
      
      ) }

    </div>

  )
}

export default Cart
