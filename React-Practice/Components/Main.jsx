import React from "react"
import IngredientList from "./IngredientList"
export default function Main(){
    const [ingredients, setIngredients] = React.useState([])
    const listofingredient = ingredients.map(ingredient=>(
        <li key = {ingredient}>{ingredient}</li>
    ))
    function submit(formData){
        const newIngredient = formData.get("ingredient") //stores user input inside here
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    const [recipeShown, setrecipeShown]=React.useState(false)
    function GetRecipe(){
        setrecipeShown(prevrecipe => !prevrecipe)
    }
    return(
    <main>
        <form action={submit} className="add-ingredient-form">
            <input
            type="text"
            placeholder="e.g oregano"
            aria-label="Add Ingredient"
            name="ingredient"/>
            <button>Add Ingredient</button>
        </form>
        {listofingredient.length>0 ? <section>
            <h2>Ingredients on Hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{listofingredient}</ul>
            {listofingredient.length>3 ? <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from the list of ingredients</p>
                </div>
                <button onClick={GetRecipe}>Get a recipe</button>
            </div>
            : null}
        </section> : null}
    </main>
    )
}
