import Die from "../components/Die"
import {useState} from "react"
import {nanoid} from "nanoid"
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
      setdice(generateAllNewDice())
    }

    function hold(id){

    }
      return (
          <main>
              <div className="dice-container">
                  {diceElements}
              </div>
              <button className="roll-dice"onClick={rollDice}>Roll</button>
          </main>
      )
  }
