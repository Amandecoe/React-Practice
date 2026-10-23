export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    return(
    <main>
        <form className="ingredient">
            <input
            type="text"
            placeholder="e.g oregano"
            aria-label="Add Ingredient"/>
            <button>Add Ingredient</button>
        </form>
    </main>
    )
}
