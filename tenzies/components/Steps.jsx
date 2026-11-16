export default function Steps(){
    const styles = `
    .how-it-works {
    background: #0E0E0D;
    color: #fff;
    padding: 3rem 2rem;
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

    .step h3 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    }

    .step p {
    color: #999;
    margin: 0;
    }
`;
    return(
        <>
        <style>{styles}</style>
            <section class="how-it-works">
            <h2 class="section-label">01 How it works</h2>
            <ol class="steps">
                <li class="step">
                    <span class="step-num">01</span>
                    <div>
                        <h3>Roll</h3>
                        <p>Ten dice land on random numbers every time you roll.</p>
                    </div>
                </li>
    <li class="step">
        <span class="step-num">02</span>
            <div>
                <h3>Hold</h3>
                <p>Pick a number and tap its dice to freeze them between rolls.</p>
            </div>
    </li>
    <li class="step">
        <span class="step-num">03</span>
            <div>
                <h3>Match</h3>
                <p>Keep rolling the rest until all ten dice show the same number.</p>
            </div>
    </li>
    </ol>
    </section>
        </>
    )
}
