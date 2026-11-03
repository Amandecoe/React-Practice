import { Mistral } from '@mistralai/mistralai';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and
suggests a recipe they could make with some or all of those ingredients.
You don't need to use every ingredient they mention in your recipe.
The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

// Initialize the official Mistral client using your API key
const client = new Mistral({ apiKey: import.meta.env.VITE_MISTRAL_API_KEY });

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await client.chat.complete({
            model: "pixtral-12b-2409", 
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
        });

        return response.choices[0].message.content;
    } catch (err) {
        console.error("Mistral Inference Error:", err.message);
        throw err;
    }
}
