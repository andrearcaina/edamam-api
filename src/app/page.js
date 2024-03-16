'use client';
import { useState, useEffect } from 'react';

export default function Home() {
    const [getSearch, setSearch] = useState([]);
    const baseURL = "https://api.edamam.com/api/recipes/v2";

    useEffect(() => {
        fetchRecipeData();
    }, []);

    const fetchRecipeData = async () => {
        try {
            const response = await fetch(`${baseURL}?type=public&q=chicken&app_id=${process.env.NEXT_PUBLIC_APP_ID}&app_key=${process.env.NEXT_PUBLIC_APP_KEY}&ingr=5-8&cuisineType=South%20American&imageSize=REGULAR`);
            const data = await response.json();
            setSearch(data);
        } catch (err) {
            console.error("couldn't fetch recipe api data", err);
        }
    };

    console.log(getSearch);

    return (
        <main>
            hello
        </main>
    );
}
