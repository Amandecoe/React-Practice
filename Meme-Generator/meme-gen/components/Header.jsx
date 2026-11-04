import trollFace from "./src/assets/Troll Face Meme.png"

export default function Header() {
    return (
        <header className="header">
            <img
                src={trollFace}
            />
            <h1>Meme Generator</h1>
        </header>
    )
}
