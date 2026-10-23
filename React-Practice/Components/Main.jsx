export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const listofingredient = ingredients.map(ingredient=>(
        <li key = {ingredient}>{ingredient}</li>
    ))
    return(
    <main>
        <form className="ingredient">
            <input
            type="text"
            placeholder="e.g oregano"
            aria-label="Add Ingredient"/>
            <button>Add Ingredient</button>
        </form>
        <ul>
            {listofingredient}
        </ul>
    </main>
    )
}
