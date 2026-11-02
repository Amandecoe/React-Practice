import React from "react"
export default function Main(){
    const [ingredients, setIngredients] = React.useState([])
    const listofingredient = ingredients.map(ingredient=>(
        <li key = {ingredient}>{ingredient}</li>
    ))
    function submit(formData){
        const newIngredient = formData.get("ingredient") //stores user input inside here
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    return(
    <main>
        <form action={submit} className="ingredient">
            <input
            type="text"
            placeholder="e.g oregano"
            aria-label="Add Ingredient"
            name="ingredient"/>
            <button>Add Ingredient</button>
        </form>
        <section>
            <h2>Ingredients on Hand:</h2>
            <ul></ul>
            <div>
                <div>
                    <h3></h3>
                    <p></p>
                    <button></button>
                </div>
            </div>
        </section>
    </main>
    )
}
