import { useParams, useHistory} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
import * as recipeService from '../../services/getInfoRecipe';

import useRecipeState from '../../hooks/useRecipeState'


const Edit = ({
}) => {
    const history = useHistory();
    const { objectId } = useParams();
    const [recipe, setRecipe] = useRecipeState(objectId);

    const { user } = useContext(AuthContext);
    const userToken = user["user-token"];
    console.log(objectId)

    const editRecipe = (e) => {
        e.preventDefault();

        const newData = Object.fromEntries(new FormData(e.currentTarget))
        recipeService.update(objectId, userToken, newData);
        history.push('/recipes')
    }

    return (
        <div className="main-container create">
            <h2>Edit New Recipe</h2>
            <form className="create-form" method="POST" onSubmit={editRecipe} >
                <p>
                    <label htmlFor="name">Name</label>
                    <span>
                        <input type="text" name="name" defaultValue={recipe.name} />
                    </span>
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <span>
                        <textarea name="description" defaultValue={recipe.description} ></textarea>
                    </span>
                </p>
                <p>
                    <label htmlFor="image">Image</label>
                    <span>
                        <input type="text" name="imgUrl"  defaultValue={recipe.imgUrl}/>
                    </span>
                </p>
                <p>
                    <label htmlFor="image">Ingridients</label>
                    <span>
                        <input type="text" name="ingredients" placeholder="ingredients..." defaultValue={recipe.ingredients} />
                    </span>                </p>
                <p>
                    <label htmlFor="type">Type</label>
                    <span>
                        <select name="type" value={recipe.type}>
                            <option value="breakfast">Breakfast</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Drinks">Drinks</option>
                        </select>
                    </span>
                </p>
                <input className="main-btn" type="submit" value="Edit Recipe" />
            </form>
        </div>
    )
}

export default Edit;

