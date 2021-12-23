
import './Recipes.css'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SingleRecipe from './SingleRecipe/SingleRecipe'
import * as recipeService from '../../services/getInfoRecipe'

const Recipes = ({
    match
}) => {
    const type = match.params.types || "all";
    const [recipe, setRecipe] = useState({});
    const [currentType, setType] = useState({});
    useEffect(() => {
        setType(type);
        if (currentType == type) {
            return
        }
        if (type == "all") {
            recipeService.getAll()
                .then(result => {
                    setRecipe(result);
                })
        } else {
            console.log(type)
            recipeService.getByType(type)
                .then(result => {
                    setRecipe(result)
                })
        }
    });

    return (
        <div className="main-container recipes">
            <div className="text">
                <h2>Here are our <strong>Best Recipes</strong></h2>
                <p>We’ve organized these recipes every way we could think of so you don't have to! Dietary restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true… no matter how you browse, we’re sure you’ll find just what you were looking for.</p>
            </div>
            <div className="nav" >
                <ul>
                    <li className="types"><NavLink activeClassName="selected type" to="/recipes/all" >All</NavLink></li>
                    <li className="types"><NavLink activeClassName="selected type" to="/recipes/dessert">Desserts</NavLink></li>
                    <li className="types"><NavLink activeClassName="selected type" to="/recipes/breakfast">Breakfast</NavLink></li>
                    <li className="types"><NavLink activeClassName="selected type" to="/recipes/dinner">Dinner</NavLink></li>
                    <li className="types"><NavLink activeClassName="selected type" to="/recipes/snaks">Snaks</NavLink></li>
                </ul>
            </div>
            <div className="recipies-section">
                {recipe.length > 0
                    ? (recipe.map(x => <SingleRecipe key={x.objectId} recipe={x} />))
                    : <h3 className="no-recipes">No recipes</h3>}
            </div>
        </div>
    );
}


export default Recipes;