import {Link} from "react-router-dom"
import DiceRow from "../../components/DiceRow"
import Steps from "../../components/Steps"
export default function Landing(props){
    return(
        <>
        <header style={{padding:'30px 100px 10px',marginBottom: '20px', color: '#A19E96', fontFamily : "JetBrains Mono", fontSize: '13px'}} className="landing-head">
            Tenzies . 10 dice . 1 number
            <hr/>
        </header>
        <div style={{padding: '0px 100px 10px'}} className="Main-landing">
            <p style={{color: '#A19E96', fontFamily : "JetBrains Mono", fontSize: '13px', fontWeight: '400'}}>/ten.zeez/</p>
            <h1 style = {{margin: '0px',color: '#F2F0EA', fontWeight: '800', fontfamily: 'Inter Tight', fontSize: '100px'}}>Tenzies</h1>
            <p style = {{color: '#F2F0EA', fontfamily: 'Inter Tight', fontWeight: '300', fontSize: '20px'}}>A Dice game with one rule. Roll ten dice, <br/> hold the number you want and keep rolling <br/> until every die matches.</p>
        <div className="landing-btn">

        <button style={{ borderRadius: '999px',marginBottom:'20px',marginRight:'20px',textDecoration: 'none',fontSize: '17px', fontWeight:'600', backgroundColor: '#FF5A36' , minHeight:'48px',whiteSpace: 'nowrap'
            , padding:'0px 28px', border:'1px solid black'
        }}><Link style = {{color: 'inherit', textDecoration:'none'}}to="/play" className="play-link"
        >Play now</Link>
        </button>

        <button
        style={{ borderRadius: '999px',marginTop:'10px',marginBottom: '40px', color: '#F2F0EA',textDecoration: 'none',fontSize: '17px', fontWeight:'600', backgroundColor: '#0E0E0D' , minHeight:'48px',whiteSpace: 'nowrap'
            , padding:'0px 28px', border:'1px solid #F2F0EA' }}>
            <Link style = {{color: 'inherit', textDecoration:'none'}}to="/how" ></Link>How it Works
        </button>

        <DiceRow/>
        </div>
        <hr/>
        <Steps/>
        </div>
        </>
    )
}
