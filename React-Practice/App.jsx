import React from "react"
import Header from "./Components/Header"
import Main from "./Components/Main"
export default function App(){
    const [count, setCount] = React.useState(0)
    function add (){
        setCount( prevCount=> prevCount+1)
    }
    function minus(){
        setCount(prevCount=> prevCount-1)
    } //we use this if the new state depends on the old state
    return(
        <>
        <button onClick={add}>{count}+</button>
        <button onClick={minus}>{count}-</button>
        <Header/>
        <Main/>
        </>
    )
}
