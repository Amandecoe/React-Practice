import {Link} from "react-router-dom"
export default function Steps(){
    const styles = `
    section{
    padding: 3rem 2rem
    }
    .glance-label{
    color: #888;
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0 0 2rem;
    }

    .glance-label>h1{
    color: #fff;
    font-family: 'Inter Tight', system-ui, sans-serif;
    font-size: 68px;
    font-weight: 700;
    }

    .glancee{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    }
    .gl{
    margin: 100px 0px;
    }
    .glance{
    background: #191917;
    border: 1px solid #2B2A27;
    border-radius: 16px;
    padding: 24px;
    cursor: pointer;
    }

    .glance>strong{
    display: block;
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1;
    color: #fff;
    font-family: 'Inter Tight', system-ui, sans-serif;
    }

    .glance>span{
    font-family: 'JetBrains Mono', ui-monospace, monospace;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.02em;
    color: #A19E96;
    }

    .how-it-works {
    background: #0E0E0D;
    color: #fff;
    padding: 0px 100px 10px;
    margin: 70px 0px;
    }

    .ready{
    color: #fff;
    font-family: 'Inter Tight', system-ui, sans-serif;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1;
    }

    .section-label {
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 0.8rem;
    font-weight: 400;
    color: #888;
    margin: 0 0 2rem;
    }

    .steps {
    list-style: none;
    margin: 0;
    padding: 0;
    }

    .step {
    display: flex;
    gap: 2rem;
    padding: 1.5rem 0;
    border-top: 1px solid #222;
    }

    .step:first-child {
    border-top: none;
    }

    .step-num {
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    font-size: 0.8rem;
    color: #888;
    padding-top: 0.4rem;
    }

    .step h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    }

    .step p {
    color: #999;
    margin: 0;
    font-weight:200;
    font-size: 0.9rem;
    }
`;
    return(
        <>
        <style>{styles}</style>
            <section className="how-it-works">
            <h2 className="section-label">01 How it works</h2>
            <ol className="steps">
                <li className="step">
                    <span className="step-num">01</span>
                    <div>
                        <h2>Roll</h2>
                        <p>Ten dice land on random numbers every time you roll.</p>
                    </div>
                </li>
    <li className="step">
        <span className="step-num">02</span>
            <div>
                <h2>Hold</h2>
                <p>Pick a number and tap its dice to freeze them between rolls.</p>
            </div>
    </li>
    <li className="step">
        <span className="step-num">03</span>
            <div>
                <h2>Match</h2>
                <p>Keep rolling the rest until all ten dice show the same number.</p>
            </div>
    </li>
    </ol>
    </section>
    <hr/>

    <section className="gl">
    <h2 className="glance-label">02 At a glance</h2>
    <div className="glancee">
    <div className="glance">
        <strong>10</strong>
        <span>dice on the board</span>
    </div>
    <div className="glance">
        <strong>1</strong>
        <span>number to watch</span>
    </div>
    <div className="glance">
        <strong>0</strong>
        <span>accounts needed</span>
    </div>
    </div>
    </section>
    <hr/>

    <section>
        <h2 className="glance-label">03 Play</h2>
        <div className="ready">
        <h1>Ready to roll?</h1>
        <button style={{ borderRadius: '999px',marginBottom:'40px',marginRight:'20px',textDecoration: 'none',fontSize: '17px', fontWeight:'600', backgroundColor: '#FF5A36' , minHeight:'48px',whiteSpace: 'nowrap'
            , padding:'0px 38px', border:'1px solid black'
        }}><Link style = {{color: 'inherit', textDecoration:'none'}}to="/play" className="play-link"
        >Play now</Link>
        </button>
        </div>
        <hr/>
    </section>
    <footer>
    <h2 className="glance-label"> &copy; 2026 Tenzies . Roll again</h2>
    </footer>
        </>
    )
}
