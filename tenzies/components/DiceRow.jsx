import { useEffect, useState } from "react"
import Die from "./Die"
const start = [
    [5, true], [3, false], [5, true], [5, true], [2, false],
    [5, true], [5, true], [6, false], [5, true], [1, false],
]
export default function DiceRow(){
    const [di, setdi] = useState(start)

    useEffect(() => {
        const id = setInterval(() => {
            setdi(old =>
                old.map(([value, isHeld]) =>
                    isHeld ? [value, isHeld] : [Math.ceil(Math.random() * 6), false]
                )
            )
        }, 1100)
        return () => clearInterval(id)
    }, [])
    return (
        <div style={{marginBottom:'70px'}} className="dice-row">
            {di.map(([value, isHeld], index) => (
                <Die key={index} value={value} isHeld={isHeld} />
            ))}
        </div>
    )
}
