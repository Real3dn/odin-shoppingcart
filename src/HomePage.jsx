import Nav from "./NavBar"
export default function Home({butan}){
    return(
        <>
        <Nav/>
        <h1>Welcomoe to Real3dn's Electronics Shop!</h1>
        <button onClick={butan} >CLICK ME FOR BUTAN</button>
        </>
    )
}