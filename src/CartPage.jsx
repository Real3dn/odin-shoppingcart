import parent from "./ShopPage";
import Nav from './NavBar'
import './ShopPage.css'
import { useState, useEffect } from "react";
function DisplayShiz({id,onClick}){
    let props=getInfo(id)
    
    return(
        <div className="cardContainer">
        <div className="cardPic"><img src={props.image}/></div>
        <div className="cardTitle">{props.title}</div>
        <div className="cardPrice">{props.price}$</div>
        <button className="cardButton" onClick={onClick}>Delete</button>
        </div>
    )

}
function getInfo(id){
    const [prod,setProd] = useState('a')
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setProd(data));
        
        console.log(prod.title)
    },[])
    return prod
}
function EmptyCart(){
    return(
        <>
        <div className="nothingInCart">
            Your cart is empty
        </div>
        </>
    )
}
function ok2(){
    const cart = { userId: 1, products: [{ id: 1 }] };
    fetch('https://fakestoreapi.com/carts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cart)
    })
    .then(response => response.json())
    .then(data => console.log(data));
}
function oklol(){
    fetch('https://fakestoreapi.com/carts')
  .then(response => response.json())
  .then(data => console.log(data));
}
function updateCart(){
    const cart = { userId: 1, products: [{ id: 2 }] };
fetch('https://fakestoreapi.com/carts/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(cart)
})
  .then(response => response.json())
  .then(data => console.log(data));

}

console.log("oklol")
oklol()
console.log("ok2")
updateCart()
updateCart()
updateCart()

oklol()
oklol()
oklol()
ok2()
// ok2()
export default function Idk({count,items,removeItem}){
    return(
        <div className="rootPage">
           <div className="navBar"> <Nav count={count} /></div>
        <div className="mainContainer">
        
        {
            items.length>0?(
            items.map((item)=>(
                < DisplayShiz id={item[1]} key={item[0]} onClick={()=>removeItem(item[0])}/>
            ))):<EmptyCart/>

        }
        </div>
        <button onClick={oklol}>fetch cart</button>
        <button onClick={updateCart}>update cart</button>
        hiiiiii
        </div>
    )
}