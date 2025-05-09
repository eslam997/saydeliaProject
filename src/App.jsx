
import './App.css'
import { Routes ,Route } from 'react-router-dom'
import Home from './component/Home'
import Footer from './component/Footer'
import Header from './component/Header'
import Prodect from './component/Prodect'
import About from './component/About'
import Contact from './component/Contact'
import Cart from './component/Cart'
import DachBoard from './component/DachBoard'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductContext from './context/ProductContext'
import ViewProduct from './component/ViewProduct'
import Edit from './component/Edit'
import Add from './component/Add'
import ProductType from './component/ProductType'
import SignUp from './component/SignUp'
import Login from './component/Login'
function App() {
  const initialcart=localStorage.getItem("cart") 
  ? JSON.parse(localStorage.getItem("cart")):[]

      const [items, setitems] = useState(initialcart);
      useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(items)) 
      },[items])
      const totalitems=()=>{return items.reduce((total,item)=>total+item.quantity,0)}
     

      const addtocard=(Product)=>{
          setitems((items)=>{
          const exist = items.find((item)=>item._id===Product._id)
          if(exist){
            return items.map((item)=>
          item.id === Product.id ?{...item , quantity:item.quantity+1}:item)
          }
          else{
            return [...items,{...Product, quantity:1}]
          }
         })
        }
  
      const inq=(id)=>{setitems((items)=>items.map((item)=> 
        item.id === id ? {...item , quantity:item.quantity+1}:item))
      }
        
        const deq=(id)=>{setitems((items)=>items.map((item)=> 
          item.id === id ? {...item , quantity:item.quantity-1}:item)
          .filter((item)=>item.quantity>0)
          )
      }
  
      const totalprice=()=>{
        return items.reduce((total,item)=>total+item.price*item.quantity ,0)
      }
       
      const removeItem = (id) => {
        setitems(items => items.filter(item => item.id !== id));
      };









    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const[changed,setChanged]=useState(true)
  const getProducts = async () => {
    try {
      setIsLoading(true);
      const req = await axios({
        method: "get",
        url: "https://backend-one-beta-63.vercel.app/api/products",
      });
      setProducts(req.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [changed]);



  return (
    <ProductContext.Provider value={{ products, isLoading,items,addtocard,inq,deq,totalprice,totalitems,removeItem ,setChanged,changed}}>
 
 
   

   <Header/>
 <div className='mt-40 min-h-screen'>
 <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/Prodect' element={<Prodect/>}/>
 <Route path='/About' element={<About/>}/>
 <Route path='/Contact' element={<Contact/>}/>
 <Route path='/Cart' element={<Cart/>}/>
 <Route path='/DachBoard' element={<DachBoard/>}/>
 <Route path='/view/:id' element={< ViewProduct/>}/>
 <Route path='/Edit/:id' element={< Edit/>}/>
 <Route path='/Add' element={< Add/>}/>
 <Route path="/ProductType/:Type" element={<ProductType/>} />
 <Route path="/SignUp" element={<SignUp/>} />
 <Route path="/Login" element={<Login/>} />
</Routes>
 </div>
 
<Footer/>


</ProductContext.Provider>
  )
}

export default App
