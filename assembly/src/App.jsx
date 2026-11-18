import { use, useState } from "react"
import  {languages}  from "./language"
export default function AssemblyEndgame(){

  const[currentword, setCurrentwWord] = useState("REACT")

  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const [choice, setChoice] = useState([])
  console.log(choice)
  const languageElements = languages.map(lang=>{
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return(
    <span
    className="chip"
    key={lang.name}
    style={styles}>
      {lang.name}
      </span>
    )
  })

  function userchoice (letter)
  {
    setChoice(
      prevletters => [...prevletters, letter ]
  )
  }

  const word = alphabet.split("").map( lett => (
    <button onClick={()=> userchoice(lett)} key={lett}>{lett}</button>
  ))

  const letterElements = currentword.split("").map( (letter, index)=>
  (
    <span key={index}>{letter.toUpperCase()}</span>
  )
  )

  return(
    <main>
        <header>
          <h1>Assembly: Endgame</h1>
          <p>Guess the word within 8 attempts to keep the programming world safe from assembly</p>
        </header>
        <section className="game-status">
            <h2>You Win!</h2>
            <p>Well done</p>
        </section>

        <section className="language-chips">
            {languageElements}
        </section>

        <section className="word">
          {letterElements}
        </section>

        <section className="keyboard">
          {word}
        </section>

        <button className="new-game">
          New Game
        </button>
    </main>
  )
}
