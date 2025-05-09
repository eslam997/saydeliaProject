import React from 'react'
import { Button } from "@material-tailwind/react";
import DataTable from './DataTable';
import { Link } from 'react-router-dom';
const DachBoard = () => {
  return (
    <div className=' h-[100vh] flex justify-center items-center px-[2em] gap-6 flex-col mt-10'>
        <h1 className='text-3xl'>DachBoard</h1>
         <Link to={"/Add"}>
         <Button color='black' size='sm' >Add New Product </Button>
         </Link> 
        <DataTable/>
    </div>
  
  )
}

export default DachBoard
