import Die from "../components/Die"
import {useState} from "react"
  export default function App() {
    function generateAllNewDice(){
      const num = []
      for (let i=0; i<10; i++){
          let rand =Math.floor(Math.random() * 6) + 1
          num.push(rand)
      }
      return num
    }
    const [dice, setdice] = useState(generateAllNewDice()) //store the random numbers generated from the function in the state array
    const diceElements = dice.map(num => <Die value = {num} />) //map over that state array which stores the random generated numbers
      return (
          <main>
              <div className="dice-container">
                  {diceElements}
              </div>
          </main>
      )
  }
