import React from "react"
import Header from "./Components/Header"
import Main from "./Components/Main"
export default function App(){
    const [count, setCount] = React.useState(0)
    function add (){
        setCount(count+1)
    }
    function minus(){
        setCount(count-1)
    }
    return(
        <>
        <button onClick={add}>{count}+</button>
        <button onClick={minus}>{count}-</button>
        <Header/>
        <Main/>
        </>
    )
}
