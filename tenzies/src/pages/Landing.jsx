import {Link} from "react-router-dom"
import DiceRow from "../../components/DiceRow"
export default function Landing(props){
    return(
        <>
        <header style={{color: '#A19E96'}} className="landing-head">
            Tenzies . 10 dice . 1 number
            <hr/>
        </header>
        <div className="Main-landing">
            <p style={{color: '#A19E96'}}>/ten.zeez/</p>
            <h1 style = {{color: '#F2F0EA'}}>Tenzies</h1>
            <p style = {{color: '#F2F0EA'}}>A Dice game with one rule. Roll ten dice, hold the number you want and keep rolling until every die matches</p>
        </div>
        <div className="landing-btn">
        <button><Link to="/play" className="play-link">Play now</Link></button>
        <button><Link to="/how" ></Link>How it Works</button>
        </div>
        <div className="landing-dice">
            <DiceRow/>
        </div>
        </>
    )
}
