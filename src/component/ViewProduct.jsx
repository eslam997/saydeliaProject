import React from 'react'
import { Button } from "@material-tailwind/react";
import { useNavigate,useParams } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import { useContext } from 'react';
import { Card, CardBody, CardHeader, Typography, Avatar } from "@material-tailwind/react";
const ViewProduct = () => {
  const { products } = useContext(ProductContext);
   const {id} = useParams()
   const product = products.find(product => product._id === id);
    const navigate = useNavigate()
  return (
   <div className="flex justify-center items-center min-h-screen bg-gray-50">
     {!product &&<h1>loading</h1>}
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader  className="h-56">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {product.title}
          </Typography>
          <Typography color="gray" className="font-medium text-lg">
            ${product.price}
          </Typography>
          <Typography color="gray" className="text-sm mt-2">
            {product.description || "No description available."}
          </Typography>
          <Button
            onClick={() => navigate(-1)}
            color="black"
            size="sm"
            className="mt-4"
          >
            Back
          </Button>
        </CardBody>
        
      </Card>
    </div>
  )
}

export default ViewProduct
