import Die from "/components/Die.jsx"
import {useState, useRef, useEffect} from "react"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import { Link } from "react-router-dom"
export default function Game() {
    const [dice, setdice] = useState(() => generateAllNewDice()) //store the random numbers generated from the function in the state array

    function generateAllNewDice(){
    const num = []
    for (let i=0; i<10; i++){
          let rand ={ value: Math.floor(Math.random() * 6) + 1,
            isHeld : false,
            id: nanoid()
        }
        num.push(rand)
    }
    return num
    }

    //having the arrow function in the initial value basically makes the state not rerun the generateAllnewDice function but only pass the return value of the function
    const gameWon = dice.every(die => die.isHeld) &&
                    dice.every(die => die.value === dice[0].value)

    const buttonRef = useRef(null)
    useEffect(() => {
    if(gameWon){
        buttonRef.current.focus()
    }
    }, [gameWon])
    const diceElements = dice.map(dieObj =>
        <Die
        key ={dieObj.id}
        value = {dieObj.value}
        isHeld={dieObj.isHeld}
        hold={() => hold(dieObj.id)}
        id={dieObj.id}/>) //map over that state array which stores the random generated numbers

    function rollDice(){
    if(!gameWon){
    setdice(oldice => oldice.map(die =>
        die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6) + 1})) //go through the array and if it is held == true then just return the die, if it is not held return a random number
    }
    else{
    setdice(generateAllNewDice())
    }}

    function hold(id){
    setdice(oldice => oldice.map(die => die.id == id ?
          {...die, isHeld: !die.isHeld} //make the isHeld prop flip
          : die  //check if the pressed id is equal to the id of the die in the array of random numbers of die
        )
    )
    }
    return (
        <main>
            <Link to="/">← Back</Link>
            {gameWon && <Confetti/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Tap a die to hold it. Roll the rest.</p>

            <section>
            <div className="dice-container">
                {diceElements}
            </div>
            <button ref={buttonRef} className="roll-dice"onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
                </button>
            </section>
        </main>
    )
}
