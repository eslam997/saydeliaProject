import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import ProductContext from "../context/ProductContext"
const Add = () => {
  const {  setChanged,changed } = useContext(ProductContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    Type:"",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method:"post",
        url:"http://localhost:3001/product",
        data:formData,
      })
      Swal.fire("ADD", "The product has been Add", "success");
      setChanged(!changed)
      navigate('/DachBoard');
      setFormData({
        title: "",
        description: "",
        image: "",
        price: "",
        Type:"",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      <Card className=" w-full max-w-5xl border border-black shadow-2xl">
        <CardBody className="space-y-6">
          <Typography variant="h4" color="blue-gray" className="text-center">
            Add Product
          </Typography>
          <form className="space-y-4">
            <Input
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <Input
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <Input
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <Input
              label="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
              <select 
             name="Type"
             value={formData.Type}
             onChange={handleChange}
        class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
        <option value="">Select</option>
        <option value="Medicines">Medicines</option>
        <option value="Hair care">Hair care</option>
        <option value="Skin care">Skin care</option>
        <option value="Daily care">Daily care</option>
        <option value="Medical supplies">Medical supplies</option>
        <option value="Vitamins and supplements">Vitamins and supplements</option>
        </select>
            <Button  color="black" fullWidth   onClick={handleAdd}>
              Add Product
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Add;
