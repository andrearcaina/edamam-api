import Link from 'next/link';
import Image from 'next/image';

export default function DisplayRecipes({ Data }) {    
    return (
        <div>
            {Data && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.keys(Data).map((recipe, index) => (
                            <div key={index} className="bg-gray-200 rounded-lg p-4 m-5">
                                <h3 className="text-center mb-2">{recipe}</h3>
                                
                                <Link href={Data[recipe].url} passHref>
                                    <p target="_blank" rel="noopener noreferrer">
                                        <Image
                                            src={Data[recipe].image}
                                            alt={recipe}
                                            width={300}
                                            height={300}
                                            className="mx-auto rounded-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                                        />
                                    </p>
                                </Link>

                                <p className="text-center mt-2 mb-1 font-bold">Click on image for the instructions!</p>
                                <p className="mb-1">Ingredients: {Data[recipe].ingredients.join(', ')}</p>
                                <p className="mb-1">Calories: {Data[recipe].calories.toFixed(2)}</p>
                            </div>
                        )
                    )}
                </div>
            )}
        </div>
    );
}
