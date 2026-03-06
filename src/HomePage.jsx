import Nav from "./NavBar"
export default function Home({butan,count}){
    return(
        <>
        <Nav count={count}/>
        <h1>Welcomoe to Real3dn's Electronics Shop!</h1>
        <button onClick={butan} >CLICK ME FOR BUTAN</button>
        </>
    )
}