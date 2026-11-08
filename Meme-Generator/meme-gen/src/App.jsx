import Header from "../components/Header"
import Main from "../components/Main"
import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)
    const [starWarsData, setStarWarsData] = React.useState({})

    React.useEffect(function(){
        fetch("https://swapi.dev/api/people/1")
        .then (res => res.json())
        .then (data => )
    }, [count])
    return (
        <>
            <Header />
            <Main />
        </>
    )
}
