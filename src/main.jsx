import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import {BrowserRouter as Router} from "react-router-dom"
//import Cartprovider from './context/Cartcontext.jsx';
createRoot(document.getElementById('root')).render(
  <Router> 
     <StrictMode>
  <ThemeProvider>
    <div className='mt-70'>
    <App />
    </div>
     
    
  </ThemeProvider>
</StrictMode>
</Router>

)
