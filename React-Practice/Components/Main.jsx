import React from "react"
import IngredientList from "./IngredientList"
import ClaudeRecipe from "./ClaudeRecipeSection"
import { getRecipeFromMistral } from "../ai"
export default function Main(){
    const [ingredients, setIngredients] = React.useState([])

    function submit(formData){
        const newIngredient = formData.get("ingredient") //stores user input inside here
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    const [recipeShown, setrecipeShown]=React.useState(false)

    async function GetRecipe(){
        const generatedrecipe = await getRecipeFromMistral(ingredients)
        console.log(generatedrecipe)
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
        {ingredients.length>0 ? <IngredientList ingredients={ingredients} GetRecipe = {GetRecipe}/> : null}
        {recipeShown ? <ClaudeRecipe/> : null}
    </main>
    )
}
