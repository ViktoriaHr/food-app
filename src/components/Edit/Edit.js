import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import useRecipeState from '../../hooks/useRecipeState'

import * as recipeService from '../../services/recipeService';
const Edit = ({
    history
}) => {
    const { objectId } = useParams();
    const [recipe, setRecipe] = useRecipeState(objectId);
    let [error, setError] = useState();
    const { user } = useContext(AuthContext);
    const userToken = user["user-token"];

    const editRecipe = (e) => {
        e.preventDefault();

        const newData = Object.fromEntries(new FormData(e.currentTarget))
        recipeService.update(objectId, userToken, newData)
        .then(() => {
            history.push('/my-recipes')
        })
        .catch(err => {
            console.log(err);
            if(err.code == "8023") {
                setError("Please add image url");
            }

        })
    }

    return (
        <div className="main-container create">
            <h2>Edit New Recipe</h2>
            <p className="error">{error}</p>
            <form className="create-form" method="POST" onSubmit={editRecipe}  >
                <p>
                    <label htmlFor="name" id="name">Name</label>
                    <span>
                        <input type="text" name="name" defaultValue={recipe.name} />
                    </span>
                </p>
                <p>
                    <label htmlFor="description" id="description">Description</label>
                    <span>
                        <textarea name="description" defaultValue={recipe.description} ></textarea>
                    </span>
                </p>
                <p>
                    <label htmlFor="image" id="image-url">Image(url)</label>
                    <span>
                        <input type="text" name="imgUrl"  defaultValue={recipe.imgUrl}/>
                    </span>
                </p>
                <p>
                    <label htmlFor="ingridients" id="ingridients">Ingridients</label>
                    <span>
                        <textarea name="ingredients" defaultValue={recipe.ingredients} />
                    </span>                </p>
                <p>
                    <label htmlFor="type" id="type">Type</label>
                    <span>
                        <select name="type" defaultValue={recipe.type}>
                            <option value="breakfast">Breakfast</option>
                            <option value="dinner">Dinner</option>
                            <option value="dessert">Dessert</option>
                            <option value="snaks">Snaks</option>
                        </select>
                    </span>
                </p>
                <input className="main-btn" type="submit" value="Edit Recipe" />
            </form>
        </div>
    )
}

export default Edit;

