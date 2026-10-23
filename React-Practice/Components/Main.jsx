export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const listofingredient = ingredients.map(ingredient=>(
        <li key = {ingredient}>{ingredient}</li>
    ))
    function submit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
    }
    return(
    <main>
        <form onSubmit={submit} className="ingredient">
            <input
            type="text"
            placeholder="e.g oregano"
            aria-label="Add Ingredient"
            name="ingredient"/>
            <button>Add Ingredient</button>
        </form>
        <ul>
            {listofingredient}
        </ul>
    </main>
    )
}
