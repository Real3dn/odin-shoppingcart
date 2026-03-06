import parent from "./ShopPage";
import Nav from './NavBar'
function DisplayShiz({a}){
    return <>{a}</>
}
export default function Idk({items}){
    const lista=[1,2,3,4,5]
    return(
        <>
        <Nav count = {items.length}/>
        {
            items.map((item)=>(
                < DisplayShiz a={item} />
            ))

        }
        hiiiiii
        </>
    )
}