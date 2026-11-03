export default function IngredientList(props){
    const listofingredient = props.ingredients.map(ingredient=>(
        <li key = {ingredient}>{ingredient}</li>
    ))
    return (<section>
            <h2>Ingredients on Hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{listofingredient}</ul>
            {listofingredient.length>3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from the list of ingredients</p>
                </div>
                <button onClick={props.GetRecipe}>Get a recipe</button>
            </div>}
            </section>)
}
