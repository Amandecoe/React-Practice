import Contacts from "./Components/Contacts"
export default function App(){
    return(
        <div className = "contacts">
            <Contacts
            img = "./images/Patrick Dempsey.jpeg"
            name = "Patrick Dempsey"
            phone = "+123748483"
            email="patrickgig@gmail.com"
            />
            <Contacts
            img = "./images/Will Smith Image.jpeg"
            name = "Will Smith"
            phone = "+123742443"
            email="willsmith@gmail.com"
            />
            <Contacts
            img = "./images/Christian_Bale_Mug_2.webp"
            name = "Christian Bale"
            phone = "+123744483"
            email="PatrickBaetman@gmail.com"
            />
            <Contacts
            img = "./images/index.webp"
            name = "Patrick Dempsey"
            phone = "+123748483"
            email="patrickgig@gmail.com"
            />
        </div>
    )
}
