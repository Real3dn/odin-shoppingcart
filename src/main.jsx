import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'

import App from './App.jsx'
import Home from './HomePage.jsx'
import Parent from './ShopPage.jsx'
import Cart from './CartPage.jsx'
import { createBrowserRouter, RouterProvider, useParams } from "react-router";
function TheMama(){
  console.log("IT'S ON")
  const [items,setItems] = useState([])
  const [count,setCount] = useState(0)


  const {name} = useParams()

function Lara(value){
  setItems([...items,[count,value]])
  console.log(items)
  setCount(prevCount=>count+1)
}

function removeItem(id){
    setItems(prevItems=>
      prevItems.filter(item=>item[0]!==id)
    )
    setCount(prevCount=>count-1)
}
return(
  <div>
    <h1>Hello there</h1>
  {name==="shop"?(
        <Parent addItem={ (n)=>{Lara(n)} }  count={count} />
  ): name==="cart"?(
    <Cart  count={count} items={items} removeItem={ (n)=>{removeItem(n)} }/>

  ): name==="home"?(
    <Home  count={count} />
  )
  :(
    <>NO PAGE EXIST</>
  )
}
</div>
  )}

const router = createBrowserRouter([
  {
    path:"/:name",
    element:<TheMama />
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router} />
</StrictMode>,
);