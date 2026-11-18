import React from "react"
import  {languages}  from "./language"
export default function AssemblyEndgame(){

  const languageElements = languages.map(lang=>{
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return(
    <span style={styles}>{lang.name}</span>
    )
  })
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
    </main>
  )
}
