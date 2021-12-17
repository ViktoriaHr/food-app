
import './Recipes.css'
import { useEffect, useState } from 'react';
import SingleRecipe from './SingleRecipe/SingleRecipe'
import * as recipeService from '../../services/getInfoRecipe'


const Recipies = () => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                console.log(result)
                setRecipe(result);
            })
    }, []);
    return (
        <div className="main-container recipes">
             <div className="text">
                        <h2>Here are our <strong>Best Recipes</strong></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum asperiores deleniti ratione. Perferendis at culpa numquam aut corporis facere tempora odio sint blanditiis. Cumque aliquam accusantium harum distinctio nobis reprehenderit.</p>
                    </div>
            <div className="recipies-section">
                    {recipe.length > 0
                    ? ( recipe.map(x => <SingleRecipe key={x.objectId} recipe={x} />) )
                    :  <h3 className="no-recipes">No recipes</h3> }

                </div>
            </div>
    );
}

export default Recipies;