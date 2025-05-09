import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductContext from '../context/ProductContext'
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react"

const ProductType = () => {
  const { Type } = useParams()
  const { products, addtocard } = useContext(ProductContext)
  const [filter, setFilter] = useState([])

  useEffect(() => {
    const filtered = products.filter(product => product.Type === Type)
    setFilter(filtered)
  }, [products, Type])

  return (
    <div className='grid grid-cols-1  md:grid-cols-2 gap-8 m-8 lg:grid-cols-3'>
      
      {filter.map((product, index) => (
        <Card className="w-96 flex flex-col justify-between mb-7 border-4" key={index}>
          <CardHeader color="white" className="relative h-56">
            <img className='w-full h-full object-contain'
              src={product.image}
              alt={product.title}
            />
          </CardHeader>
          <CardBody className='flex flex-col'>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {product.title}
            </Typography>
            <Typography className='flex-1'>
              {product.description.length > 50
                ? product.description.slice(0, 50) + "...."
                : product.description
              }
            </Typography>
            <Typography className="mt-4 font-bold text-black text-xl">
              Price: ${product.price}
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center">
            <Button onClick={() => addtocard(product)}>ADD TO CART</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default ProductType
