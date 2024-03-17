async function fetchRecipes(recipe, cuisineType, mealType) {
    const baseURL = "https://api.edamam.com/api/recipes/v2";
    const APP_ID = process.env.APP_ID;
    const APP_KEY = process.env.APP_KEY;

    try {
        const response = await fetch(`${baseURL}?type=public&q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}&ingr=4-20&cuisineType=${cuisineType}&mealType=${mealType}&imageSize=REGULAR`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Couldn't fetch recipe API data", err);
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);

    const recipe = searchParams.get('recipe');
    const cuisineType = searchParams.get('cuisineType');
    const mealType = searchParams.get('mealType');

    const data = await fetchRecipes(recipe, cuisineType, mealType);
    const result = {};

    data.hits.slice(0, 9).forEach((recipe) => {
        result[recipe.recipe.label] = {
            image: recipe.recipe.image,
            url: recipe.recipe.url,
            calories: recipe.recipe.calories,
            ingredients: recipe.recipe.ingredientLines
        };
    });

    return Response.json(result, {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
