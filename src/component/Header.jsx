import React from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Button,
  } from "@material-tailwind/react";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
  import { Link } from 'react-router-dom';
  import { FaShoppingCart } from "react-icons/fa";
 // import { cartcontext } from './context/Cartcontext'
import { useContext } from 'react';
import ProductContext from '../context/ProductContext'
function NavList() {
  
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          color="white"
          className="p-1 font-medium"
        >
          <Link to="/" className="text-xl font-bold flex items-center hover:text-light-blue-900 transition-colors">
            Home
          </Link>
        </Typography>
        <Typography
          as="li"
          color="white"
          className="p-1 font-medium"
        >
          <Link to="/Prodect" className="text-xl font-bold flex items-center hover:text-light-blue-900 transition-colors">
            Prodect
          </Link>
        </Typography>
        <Typography
          as="li"
          color="white"
          className="p-1 font-medium"
        >
          <Link to="/About" className="text-xl font-bold flex items-center hover:text-light-blue-900 transition-colors">
            About us
          </Link>
        </Typography>
        <Typography
          as="li"
          color="white"
          className="p-1 font-medium"
        >
          <Link to="/Contact" className="text-xl font-bold flex items-center hover:text-light-blue-900 transition-colors">
            Contact us
          </Link>
        </Typography>

        <Typography
          as="li"
          color="white"
          className="p-1 font-medium"
        >
          <Link to="/DachBoard" className="text-xl font-bold flex items-center hover:text-light-blue-900 transition-colors">
          DachBoard
          </Link>
        </Typography>

       

          
       
      </ul>
    );
  }

const Header = () => {
  const{totalitems}=useContext(ProductContext)
    const [openNav, setOpenNav] = React.useState(false);
 
    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
   
    React.useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
   
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);

  return (
    <Navbar className="min-w-full mx-auto max-w-screen-xl px-6 py-3 lone fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between text-white">
        <Typography
          as={Link}
          to="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
        <img src="image/Pink_Cute_Simple_Flower_Shop_Circle_Logo__1_-removebg-preview (1).png" alt="logo" className='w-28 ' />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className='flex items-center gap-5'>
        
            <Link to="/Cart " className='relative'>
             <span className='w-4 h-4 text-center text-white text-sm rounded-full bg-deep-orange-700 absolute -top-2 -right-2 ' >{totalitems()}</span> 
             <FaShoppingCart className='text-3xl text-white' /></Link>
         
             <Link to="/Login">
          <Button className='bg-white text-black hover:bg-blue-gray-100  rounded-1'>Login</Button>
          </Link>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
      
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
        </div>
     
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  )
}

export default Header
