import Die from "../components/Die"
import {useState} from "react"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
  export default function App() {
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

    const [dice, setdice] = useState(generateAllNewDice()) //store the random numbers generated from the function in the state array

    const diceElements = dice.map(dieObj =>
        <Die
        key ={dieObj.id}
        value = {dieObj.value}
        isHeld={dieObj.isHeld}
        hold={() => hold(dieObj.id)}
        id={dieObj.id}/>) //map over that state array which stores the random generated numbers

    function rollDice(){
      setdice(oldice => oldice.map(die =>
        die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6) + 1})) //go through the array and if it is held == true then just return the die, if it is not held return a random number
    }

    function hold(id){
      setdice(oldice => oldice.map(die => die.id == id ?
          {...die, isHeld: !die.isHeld} //make the isHeld prop flip
          : die  //check if the pressed id is equal to the id of the die in the array of random numbers of die
        )
      )
    }

    const gameWon = dice.every(die => die.isHeld)
      return (
          <main>
            {gameWon && <Confetti/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same.
              Click each die to freeze it at its current value between rolls.</p>
              <div className="dice-container">
                  {diceElements}
              </div>
              <button className="roll-dice"onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
                </button>
          </main>
      )
  }
