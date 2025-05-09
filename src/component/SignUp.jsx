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
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(API, form); 
      console.log(res.data);
      navigate("/login"); 
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center">
      <Card color="white" shadow={true} className="p-8 w-full max-w-md">
        <Typography variant="h4" color="blue-gray" className="text-center mb-6">
          Create Account
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input size="lg" label="Name" name="name" value={form.name} onChange={handleChange} />
          <Input size="lg" label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
          <Input size="lg" label="Password" name="password" type="password" value={form.password} onChange={handleChange} />
          
          {error && <Typography color="red" className="text-sm">{error}</Typography>}

          <Button type="submit" className="mt-6" fullWidth>
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

