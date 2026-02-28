import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'

import App from './App.jsx'
import Home from './HomePage.jsx'
import Parent from './ShopPage.jsx'
import Cart from './CartPage.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";

function onChange(){
  alert("hihi")
}
function Lara(value){
    const [items,setItems] = useState([])
    const [count,setCount] = useState(0)
        function addItem(){
        setItems([...items,value])
        console.log(items)
        setCount(prevCount=>prevCount+1)
        }
      }
const router = createBrowserRouter([
  {
    path:"/",
    element:<Home butan = { ()=>alert("hihi") } />
  },
  {
    path:"shop",
    element:<Parent hihi={(value)=>Lara(value)} />
  },
  {
    path:"cart",
    element:<Cart hihi={()=>alert("hihi")} />
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    {/* <Shop /> */}
    {/* <Idk /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
