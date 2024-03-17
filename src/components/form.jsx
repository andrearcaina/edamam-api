import { useState } from 'react';

export default function Form({ formSubmit }) {
    const [recipe, setRecipe] = useState('');
    const [cuisineType, setCuisineType] = useState('');
    const [mealType, setMealType] = useState('');
    
    const fetchData = async () => {
        try {
            const response = await fetch(`api/search?recipe=${recipe}&cuisineType=${cuisineType}&mealType=${mealType}`);
            const data = await response.json();
            formSubmit(data.body);
        } catch (err) {
            console.error("Couldn't fetch recipe API data", err);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <form onSubmit={handleSearch} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
            <input
                type="text"
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
                placeholder="Search for recipes..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />

            <select
                value={cuisineType}
                onChange={(e) => setCuisineType(e.target.value)}
                className="w-full mt-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            >
                <option value="" disabled>Select Cuisine Type</option>
                <option value="American">American</option>
                <option value="Asian">Asian</option>
                <option value="British">British</option>
                <option value="Caribbean">Caribbean</option>
                <option value="Central Europe">Central Europe</option>
                <option value="Chinese">Chinese</option>
                <option value="Eastern Europe">Eastern Europe</option>
                <option value="French">French</option>
                <option value="Indian">Indian</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Kosher">Kosher</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="Mexican">Mexican</option>
                <option value="Middle Eastern">Middle Eastern</option>
                <option value="Nordic">Nordic</option>
                <option value="South American">South American</option>
                <option value="South East Asian">South East Asian</option>
            </select>

            <select
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
                className="w-full mt-4 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            >
                <option value="" disabled>Select Meal Type</option>
                <option value="breakfast">Breakfast</option>
                <option value="brunch">Brunch</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
                <option value="teatime">Teatime</option>
            </select>

            <button
                type="submit"
                className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Search
            </button>
        </form>
    );
}