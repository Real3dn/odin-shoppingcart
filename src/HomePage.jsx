import Nav from "./NavBar"
export default function Home({butan,count}){
    return(
        <>
           <div className="navBar"> <Nav count={count} /></div>
        <h1>Welcomoe to Real3dn's Electronics Shop!</h1>
        </>
    )
}