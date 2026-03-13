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
        </div>
    )
}