import {Link} from "react-router"
import "./ShopPage.css"
export default function Nav({count}){
    return(
        <>
        <ul className="navList">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({count})</Link>
        </ul>
        </>
    )
}