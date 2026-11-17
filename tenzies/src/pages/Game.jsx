import Die from "/components/Die.jsx"
import {useState, useRef, useEffect, use} from "react"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import { Link } from "react-router-dom"
export default function Game() {
    const [dice, setdice] = useState(() => generateAllNewDice()) //store the random numbers generated from the function in the state array
    const [rolls, setRolls] = useState(0)
    const [time, settime] = useState(0)
    const [timerOn, settimerOn] = useState(false)
    const[best, setBest]=useState(()=>{
        try{
            const saved = localStorage.getItem("tenzies-best")
        }
        catch{

        }
    })
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
        settimerOn(true)
        setRolls( roll => roll+1)
    setdice(oldice => oldice.map(die =>
        die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6) + 1})) //go through the array and if it is held == true then just return the die, if it is not held return a random number
    }
    else{
    setdice(generateAllNewDice())
    setRolls(0)
    }}

    function hold(id){
        settimerOn(true)
    setdice(oldice => oldice.map(die => die.id == id ?
          {...die, isHeld: !die.isHeld} //make the isHeld prop flip
          : die  //check if the pressed id is equal to the id of the die in the array of random numbers of die
        )
    )
    }

    const running = timerOn && !gameWon

    useEffect(() => {
        if (!running) return //if it is not running do nothing
        const startedAt = Date.now() //the instant the timer begins

        const id = setInterval(()=>{
            settime(Date.now() - startedAt) //subtract the time our timer began from the time right now to get the difference and know how long since the start up to the now the timer has been running
        },100)
        return () => clearInterval(id)
    },[running]) //if running becomes true then the effect stops, and starts again when it changes back
    return (
        <>
            {gameWon && <Confetti/>}
            <nav className="wrap">
                <header>
                <Link to="/" className="back-link">← Back</Link>
                <span style={{fontFamily: 'JetBrains Mono', fontSsize: '13px',
                letterSpacing: '0.02em',
                color: '#A19E96'}}className="topbar-label">/play</span>
                </header>
            </nav>
        <main className="game">
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Tap a die to hold it. Roll the rest.</p>

                <hr/>
                <div className="stats">
                    <p>Rolls: {rolls}</p>
                    <p>Time: {(time/1000).toFixed(1)}s</p>
                </div>
            <section className="main-dices">
            <div className="dice-container">
                {diceElements}
            </div>
            <button ref={buttonRef} className="roll-dice"onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}
                </button>
            </section>
        </main>
        </>
    )
}
