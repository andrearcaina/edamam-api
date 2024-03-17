export default function DisplayRecipes({ Data }) {
    return (
        <div>
            {Data.hits && (
                 <p>Output: {JSON.stringify(Data.hits)}</p>
            )}
        </div>
    );
}
