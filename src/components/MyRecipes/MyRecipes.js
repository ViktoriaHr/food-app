
import { useEffect, useState, useContext } from 'react';
import * as recipeService from '../../services/getInfoRecipe';
import { AuthContext } from '../../context/AuthContext'
import SingleRecipe from '../Recipes/SingleRecipe/SingleRecipe';

const MyRecipes = () => {
    const { user } = useContext(AuthContext);
    const [recipe, setRecipe] = useState([]);
    console.log(user.ownerId);
    useEffect(() => {
        recipeService.getMyRecipes(user.ownerId)
            .then(result => {
                console.log(result)
                setRecipe(result);
            })
    }, []);
        return (
            <div className="main-container recipes">
                 <div className="text">
                            <h2></h2>
                            <p></p>
                        </div>
                <div className="recipies-section">
                        {recipe.length > 0
                        ? ( recipe.map(x => <SingleRecipe key={x.objectId} recipe={x} />) )
                        :  <h3 className="no-recipes">You don't have any recipes!</h3> }
    
                    </div>
                </div>
        );
}


export default MyRecipes;