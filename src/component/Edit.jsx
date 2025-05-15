import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  CardBody,
  Input,
  Typography,
  Button,
} from '@material-tailwind/react';
import Swal from 'sweetalert2';


function Edit() {
  const { setChanged,changed } = useContext(ProductContext);
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    Type:'',
  });

  useEffect(() => {
    const product = products.find((p) => p._id === id);
    if (product) {
      setFormData({
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        Type:product.Type,
      });
    }
  }, [id, products]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
       await axios({
        method: 'put',
        url: `https://backend-one-beta-63.vercel.app/api/products/${id}`,
        data: formData,
      });
     
 Swal.fire({
       title: "The product has been Edit.",
       icon: "success",
      timer:1000,
      showConfirmButton:false
     })
     setChanged(!changed)
      navigate('/DachBoard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      <Card className="w-full max-w-5xl border border-black shadow-5xl">
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="text-center mb-6">
            Edit Product
          </Typography>

          <form className="space-y-6">
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
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <Input
              label="Image "
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
        <option value="Medicines">Medicines</option>
        <option value="Hair care">Hair care</option>
        <option value="Skin care">Skin care</option>
        <option value="Daily care">Daily care</option>
        <option value="Medical supplies">Medical supplies</option>
        <option value="Vitamins and supplements">Vitamins and supplements</option>
        </select>
            <Button  color="black" fullWidth onClick={handleEdit} >
              Edit Product
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Edit;
