import { useEffect, useState } from "react";
import "./ShopPage.css"
import Nav from "./NavBar";
function DisplayShiz({id,onClick}){
    let props=getInfo(id)
    
    return(
        <div className="cardContainer">
        <div className="cardPic"><img src={props.image}/></div>
        <div className="cardTitle">{props.title}</div>
        <div className="cardPrice">{props.price}$</div>
        <button className="cardButton" onClick={onClick}>Purchase</button>
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
export default function Parent({addItem,count}){
    return(
        <>
        <Shop addItema={(id)=>addItem(id)} count={count} />
        </>
    )
}
function Shop({addItema,count}){
    const ids = Array.from({length:12}, (_,i)=>i+1)

    return(
        <div className="rootPage">
           <div className="navBar"> <Nav count={count} /></div>
        <div className="mainContainer">
        {/* {prod.title} */}
        {/* <DisplayShiz id={1}/> */}
        
        
        {
            ids.map((id)=>(
                <DisplayShiz id={id} key={id} onClick={()=>addItema(id)}/>
            ))
        }
        </div>
        </div>
    )
}