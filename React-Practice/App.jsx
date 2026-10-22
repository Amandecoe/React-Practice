import Entry from "./Components/Entry"
import Header from "./Components/Header"
import data from "./data"
export default function App(){
    const entryelements = data.map((entry )=> {
        return (
        <Entry
        key={entry.id}
        img={entry.img}
        title = {entry.title}
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
