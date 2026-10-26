import React from "react"
import Header from "./Components/Header"
import Main from "./Components/Main"
export default function App(){
    const [count, setCount] = React.useState(0)
    function add (){
        console.log("Add")
    }
    return(
        <>
        <button onClick={add}>Add</button>
        <Header/>
        <Main/>
        </>
    )
}
