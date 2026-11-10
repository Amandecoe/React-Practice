import {useState, useEffect} from "react"
export default function Main() {
    const [meme, setMeme] = useState({
        topText : "Yeah",
        bottomText : "Walk into Mordor",
        imageUrl : "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[]) //run it one time, because the array doesn't change
    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length) //generate a new random number
        const newMemeUrl = allMemes[randomNumber].url //.url is the property of each meme in the array from the api, they contain .url
        setMeme(prevmeme => ({
            ...prevmeme,
            imageUrl:newMemeUrl
        }))
    }
    function handleChange(event){
        const {value, name} = event.currentTarget
        setMeme(prevmeme => ({
            ...prevmeme,
            [name]: value
        }))
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value = {meme.topText}
                    />
                </label>
                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}
