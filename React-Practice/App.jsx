import Entry from "./Components/Entry"
import Header from "./Components/Header"
import data from "./data"
export default function App(){
    const entryelements = data.map((entry )=> {
        return (
        <Entry
        {...entry}
        />)
    })
    return(
        <>
        <Header/>
            <main className="container">
                {entryelements}
            </main>
        </>
    )
}
