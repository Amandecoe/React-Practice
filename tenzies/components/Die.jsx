const PIPS = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9],
}
export default function Die(props){
    return (
        <>
        <button
        className="die"
        aria-pressed={props.isHeld}
        onClick={props.hold}
                            >
        {PIPS[props.value].map(cell => (
        <i
            key={cell}
            style={{
            gridRow: Math.ceil(cell / 3),
            gridColumn: ((cell - 1) % 3) + 1,
            }}
        />
        ))}
    </button>
    </>
    )
}
