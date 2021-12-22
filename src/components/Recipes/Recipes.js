
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
                        <p>We’ve organized these recipes every way we could think of so you don't have to! Dietary restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true… no matter how you browse, we’re sure you’ll find just what you were looking for.</p>
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