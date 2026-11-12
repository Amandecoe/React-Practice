import React from "react"
import IngredientList from "./IngredientList"
import ClaudeRecipe from "./ClaudeRecipeSection"
import { getRecipeFromMistral } from "../ai"
export default function Main(){
    const [ingredients, setIngredients] = React.useState([])
    const recipeSection = React.useRef(null)
    function submit(formData){
        const newIngredient = formData.get("ingredient") //stores user input inside here
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const [recipe, setRecipe] = React.useState("")
    async function GetRecipe(){
        const generatedrecipe = await getRecipeFromMistral(ingredients)
        setRecipe(generatedrecipe)
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
        {recipe ? <ClaudeRecipe recipe={recipe}/> : null}
    </main>
    )
}
