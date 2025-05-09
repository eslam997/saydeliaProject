import React from 'react'
import Category from './Category';
import Prodect from './Prodect';
import { Carousel } from "@material-tailwind/react";
const Home = () => {
  return (
    <div className='min-h-[100vh]'>    
      <div className='flex justify-center'>
    <Carousel className="  mt-4 max-w-7xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl  h-[60vh]">
         <img
           src="/image/osPYa7YhlkEzztLNHQd2wbP6RqBztmVibjsWimCS.webp"
           alt="image 1"
           className="h-full w-full object-contain "
         />
         <img
           src="/image/GZKExUgOuHLcSFr4BVNtZ6F1PFVPHd2l4NRUavoF.webp"
           alt="image 2"
           className="h-full w-full object-contain "
         />
         <img
           src="/image/YOeyqTNchTX0i1cZQq4z5ITcKdbjFMKQrpnk4c4f.webp"
           alt="image 3"
           className="h-full w-full object-contain "
         />
         <img
           src="/image/GxKu96BRUZPYptUOfCakQelNJDzscTtT5ZNT4eKk.webp"
           alt="image 4"
           className="h-full w-full object-contain "
         />
           <img
           src="/image/5m5joYclhh2yh3d41FSpiGZxRdrpYqYiiAHQLWOZ.webp"
           alt="image 5"
           className="h-full w-full object-contain "
         />
       </Carousel>
     
       </div>
       <Category/>
       <Prodect/>

       </div>

  )
}

export default Home
