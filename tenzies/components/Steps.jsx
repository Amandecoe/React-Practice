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

    .glancee{
    display: flex;
    flex-direction: row;
    gap: 30px;
    width: 100px;
    }

    .glance.h1{
    font-family: 'Inter Tight'';
    }
    .glance>p{
    font-family: ui-monospace, "SF Mono", Menlo, monospace;
    }

    .how-it-works {
    background: #0E0E0D;
    color: #fff;
    padding: 0px 100px 10px;
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
    font-size: 1.6rem;
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
    <section>
    <h2 className="glance-label">02 At a glance</h2>
    <div className="glancee">
    <button className="glance">
        <h1>10</h1>
        <p>dice on the board</p>
    </button>
    <button className="glance">
        <h1>1</h1>
        <p>number to watch</p>
    </button>
    <button className="glance">
        <h1>0</h1>
        <p>accounts needed</p>
    </button>
    </div>
    </section>
        </>
    )
}
