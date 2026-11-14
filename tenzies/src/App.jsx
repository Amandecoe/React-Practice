import Die from "../components/Die"
function generateAllNewDice(){
      const num = []
      for (let i=0; i<10; i++){
          let rand =Math.floor(Math.random() * 6) + 1
          num.push(rand)
      }
      return num
    }
  export default function App() {
      return (
          <main>
              <div className="dice-container">
                  <Die value = {1}/>
                  <Die value = {2}/>
                  <Die value = {3}/>
                  <Die value = {4}/>
                  <Die value = {5}/>
                  <Die value = {6}/>
                  <Die value = {7}/>
                  <Die value = {8}/>
                  <Die value = {9}/>
                  <Die value = {10}/>
              </div>
          </main>
      )
  }
