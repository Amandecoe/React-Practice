import Entry from "./Components/Entry"
import Header from "./Components/Header"
import data from "./data"
export default function App(){

    const entryelements = data.map((entry )=> {
        return (
        <Entry
        img={entry.img}
        title = {entry.img}
        country = {entry.country}
        googleMapsLink = {entry.googleMapsLink}
        date = {entry.dates}
        text = {entry.text}
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
