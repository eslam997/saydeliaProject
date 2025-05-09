
import { Card, CardHeader, CardBody, CardFooter, Typography, Button,Spinner } from "@material-tailwind/react";
import { useContext } from 'react';
import ProductContext from '../context/ProductContext'


const Product = () => {
  const { products, isLoading } = useContext(ProductContext);
  const{addtocard}=useContext(ProductContext)

  return (
    
    <div >
      <div className="p-10 mx-20"><h1 className="text-center font-bold text-4xl">ALL PRODUCT </h1></div>
      {isLoading ? (
        <div className="flex justify-center items-center "> <Spinner className="w-12 h-12" /> </div>
      ) : (
        <div className='grid grid-cols-1  md:grid-cols-2 gap-8 m-8 lg:grid-cols-3'>
          {products.map((product, index) => (
            <div className='flex justify-center ' key={index}>
              <Card className=" w-96 flex flex-col justify-between mb-7 border-4">
                <CardHeader color="white" className="relative h-56">
                  <img className='w-full h-full object-contain '
                    src={product.image}
                    alt={product.title}
                  />
                </CardHeader>
                <CardBody className='flex flex-col '>
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
                  <Button onClick={()=>addtocard(product)}>ADD TO CART</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>

  );
};

export default Product;
