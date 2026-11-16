import {Link} from "react-router-dom"
import DiceRow from "../../components/DiceRow"
import Steps from "../../components/Steps"
export default function Landing(props){
    return(
        <>
        <header style={{color: '#A19E96', fontFamily : "JetBrains Mono", fontSize: '13px'}} className="landing-head">
            Tenzies . 10 dice . 1 number
            <hr/>
        </header>
        <div className="Main-landing">
            <p style={{color: '#A19E96', fontFamily : "JetBrains Mono", fontSize: '13px', fontWeight: '400'}}>/ten.zeez/</p>
            <h1 style = {{margin: '0px',color: '#F2F0EA', fontWeight: '800', fontfamily: 'Inter Tight', fontSize: '120px'}}>Tenzies</h1>
            <p style = {{color: '#F2F0EA', fontfamily: 'Inter Tight', fontWeight: '500', fontSize: '24px'}}>A Dice game with one rule. Roll ten dice, hold the <br/> number you want and keep rolling until every die matches.</p>
        <div className="landing-btn">
        <button><Link to="/play" className="play-link"
        style={{fontSize: '17px'}}
        >Play now</Link>
        </button>
        <button
        style={{fontSize: '17px'}}>
            <Link to="/how" ></Link>How it Works
        </button>
        <DiceRow/>
        </div>
        </div>
        <hr/>
        <Steps/>
        </>
    )
}
