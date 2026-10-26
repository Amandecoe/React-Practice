import React from "react"
import Header from "./Components/Header"
import Main from "./Components/Main"
export default function App(){
    const [isGoingOut, setOut] = React.useState(true)
    function changeMind(){
        setOut(prev => !prev)
    }
    return(
        <>
        <button onClick={changeMind}>{isGoingOut ? "Yes" : "No"}</button>
        <Header/>
        <Main/>
        </>
    )
}
