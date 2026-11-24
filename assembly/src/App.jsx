import { useState } from "react"
import { clsx } from "clsx"
import { languages } from "./language"
import { getFarewellText } from "./utils"
import { getRandomWord } from "./utils"

export default function AssemblyEndgame() {
    //states
    const [currentWord, setCurrentWord] = useState(() => getRandomWord())
    const [guessedLetters, setGuessedLetters] = useState([])

    const wrongGuessCount = guessedLetters.filter(
        letter => !currentWord.includes(letter)
    ).length //contains the letters that are not found in the current word but are chosen by user
    const isGameLost = wrongGuessCount >= languages.length - 1
    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameover = isGameWon || isGameLost
    const LastGuessLetter = guessedLetters[guessedLetters.length -1] //gives the last guessed letter
    const isLastGuessIncorrect = LastGuessLetter && !currentWord.includes(LastGuessLetter) //checkes if the LastGuess contains the current word

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )
    }
    function startNewGame(){
        setCurrentWord(getRandomWord())
        setGuessedLetters([])
    }
    const languageElements = languages.map((lang, index) => {
        const isLanguageLost = index < wrongGuessCount
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        const classNamex = clsx("chip", isLanguageLost && "lost")
        return (
            <span
                className={classNamex}
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })

    const letterElements = currentWord.split("").map((letter, index) => {
        const shouldrevealletter = isGameLost || guessedLetters.includes(letter)
        const letterClassName = clsx(
            isGameLost && !guessedLetters.includes(letter) && "missed-letter"
        )
        return(
        <span key={index} className={letterClassName}>{shouldrevealletter ? letter.toUpperCase() : ""}</span>)
    })

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (
            <button
                className={className}
                key={letter}
                disabled={isGameover}
                aria-disabled={guessedLetters.includes(letter)}
                aria-label = {`letter ${letter}`}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })


    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost : isGameLost,
        farwell : !isGameover && isLastGuessIncorrect
    })

    function renderGameStatus(){
        if (!isGameover && isLastGuessIncorrect){
            return (
            <p
            className="farewell-message">
            {getFarewellText(languages[wrongGuessCount - 1].name)}
            </p>)
        }
        if(isGameWon){
            return (
                <>
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
                </>
            )
        }
            if(isGameLost){
                return(
                <>
                <h2>Game Over!</h2>
                    <p>Better start learning Assembly! </p>
                </>
                )
            }
            return null
        }
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
            <section  aria-live="polite"  role = "status" className={gameStatusClass}>
                {renderGameStatus()}
            </section>
            <section className="language-chips">
                {languageElements}
            </section>
            <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            {isGameover && <button onClick={startNewGame} className="new-game">New Game</button>}
        </main>
    )
}
