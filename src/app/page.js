'use client';
import { useState } from 'react';
import { Form, DisplayRecipes } from '@/components';

export default function API_Showcase() {
    const [fetchData, setData] = useState([]);

    const handleFormSubmit = (userInput) => {
        setData(userInput);
    };

    return (
        <main>
            <h1 className="text-xl text-center mt-12 font-bold"> Edamam API Showcase </h1>

            <Form formSubmit={handleFormSubmit} />

            <DisplayRecipes Data={fetchData} />
        </main>
    );
}

