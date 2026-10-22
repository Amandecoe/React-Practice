import Entry from "./Components/Entry"
import Header from "./Components/Header"
import data from "./data"
export default function App(){
    const data = data.map((d)=> {
        return <Entry
        img={{src:data.img.src,
            alt:data.img.alt
        }}
        title = {data.img}
        country = {data.country}
        googleMapsLink = {data.googleMapsLink}
        date = {data.dates}
        text = {data.text}
        />
    })
    return(
        <>
        <Header/>
            <main className="container">
                <Entry/>
            </main>
        </>
    )
}
