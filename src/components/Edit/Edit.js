import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
import * as recipeService from '../../services/getInfoRecipe';

const Edit = ({
}) => {
    const { objectId } = useParams();
    const { user } = useContext(AuthContext);
    const userToken = user["user-token"];
    console.log(objectId)

    const editRecipe = (e) => {
        e.preventDefault();

        const newData = Object.fromEntries(new FormData(e.currentTarget))
        recipeService.update(objectId, userToken, newData);
    }

    return (
        <div className="main-container create">
            <h2>Edit New Recipe</h2>
            <form className="create-form" method="POST" onSubmit={editRecipe} >
                <p>
                    <label htmlFor="name">Name</label>
                    <span>
                        <input type="text" name="name" />
                    </span>
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <span>
                        <textarea name="description"></textarea>
                    </span>
                </p>
                <p>
                    <label htmlFor="image">Image</label>
                    <span>
                        <input type="text" name="imgUrl" />
                    </span>
                </p>
                <p>
                    <label htmlFor="image">Ingridients</label>
                    <span>
                        <input type="text" name="ingredients" placeholder="ingredients..." />
                    </span>                </p>
                <p>
                    <label htmlFor="type">Type</label>
                    <span>
                        <select name="type">
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

