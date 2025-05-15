import React, { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Swal from 'sweetalert2'
const API="https://backend-one-beta-63.vercel.app/api/users/login"
const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(API, form);
      const token = res.data.data.token;


      localStorage.setItem("token", JSON.stringify(token));
      
  
Swal.fire({
  title: "Login Successful",
  icon: "success",
 timer:1000,
 showConfirmButton:false
});
     
    
      // localStorage.setItem("user", JSON.stringify(decodedUser))

      navigate("/");
    } catch (err) {

      setError(err.res?.data?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center">
      <Card color="white" shadow={true} className="p-8 w-full max-w-md">
        <Typography variant="h4" color="blue-gray" className="text-center mb-6">
          Login
        </Typography>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <Input
            size="lg"
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            size="lg"
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          {error && <Typography color="red" className="text-sm">{error}</Typography>}

          <Button  type="submit" className="mt-6" fullWidth>
            Login
          </Button>

          <Typography color="gray" className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/signUp" className="text-blue-600 hover:underline font-medium">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
