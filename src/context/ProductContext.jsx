import { createContext } from "react"


const ProductContext = createContext({
    products : [],
    changed: true, 
    setChanged: () => {},
    items:()=>{},
  addtocard:()=>{},
  inq:()=>{},
  deq:()=>{},
  totalprice:()=>{},
  totalitems:()=>{},
  removeProductFromState:()=>{},
})
  


export default ProductContext
