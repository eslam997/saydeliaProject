//import React, { useEffect } from 'react'
import { Card, Typography ,Avatar,Button } from "@material-tailwind/react";
import Swal from 'sweetalert2';
import axios from 'axios';
import ProductContext from '../context/ProductContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const TABLE_HEAD = ["Name", "Price", "Image", "Action"];



const DataTable = ( ) => {
  const { products,setChanged,changed  } = useContext(ProductContext);



    const deleteProduct = async (id)=>{
     try{
        const req = await axios ({
        method : "delete",
        url:`https://backend-one-beta-63.vercel.app/api/products/${id}`,})
        return req.status;
    }
    catch(e){
    return e
    }
    }


   const handleDelete = (id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (res)=>{
        if(res.isConfirmed){
         const resultDelete= await deleteProduct(id)
         if (resultDelete === 200) {
          setChanged(!changed)
          Swal.fire("Deleted!", "The product has been deleted.", "success");
        }
      } })
   }

   

  return (
    <Card className="h-full w-full overflow-auto ">
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          { products.map((product, index) => {
            const isLast = index === products.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {product.title}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    ${product.price}
                  </Typography>
                </td>
                <td className={classes}>
               <Avatar src={product.image} alt='pic' size='sm' />
                  
                 
                </td>
                <td className={classes}>
                  <Typography
                    as="div"
                    color="blue-gray"
                    className="font-medium"
                  >
                
                  <Link to={ `/view/${product._id}`}> 
                  <Button className='m-4' color='black' size='sm'>View</Button>
                  </Link> 
                   
                  <Link to={`/Edit/${product._id}`} > 
                   <Button  className='m-4' color='black' size='sm'> 
                  Edit 
                  </Button>
                  </Link>
              
                <Button  className='m-4' color='red' size='sm'onClick={()=>handleDelete(product._id)}> Del</Button>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>

  )
}

export default DataTable
