import React, { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const API="https://backend-one-beta-63.vercel.app/api/users/register";
const SignUp = () => {
    const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });




  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSingUp = async (e) => {
    e.preventDefault();


    try {
      const res = await axios.post(API, form);  
      if(res.data.data ===201 || res.data.data ===200){
          navigate("/login"); 
      }
     
    } catch (err) {
       setError(err.res?.data?.data?.message || "SignUp failed");
    }
  };

  return (
    <div className="flex justify-center">
      <Card color="white" shadow={true} className="p-8 w-full max-w-md">
        <Typography variant="h4" color="blue-gray" className="text-center mb-6">
          Create Account
        </Typography>
        <form onSubmit={handleSingUp} className="flex flex-col gap-4">
          <Input size="lg" label="Name" name="name" value={form.name} onChange={handleChange} />
          <Input size="lg" label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
          <Input size="lg" label="Password" name="password" type="password" value={form.password} onChange={handleChange} />
          
        {error && <Typography color="red" className="text-sm">{error}</Typography>}

          <Button  type="submit" className="mt-6" fullWidth>
            Sign Up
          </Button>
          
          <Typography color="gray" className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;

