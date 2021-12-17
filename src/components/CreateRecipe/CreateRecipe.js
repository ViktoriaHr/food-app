import './CreateRecipe.css'
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import * as recipeService from "../../services/getInfoRecipe";

const CreateRecipe = () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const userToken = user["user-token"];


    const createRecipe = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { name, description, ingredients, imgUrl, type } = Object.fromEntries(formData)
        console.log(name)
        recipeService.create({
            name,
            description,
            ingredients,
            imgUrl,
            type
        }, userToken)
            .then((data) => {
                history.push('/recipes')
            })
    }


    return (
        <div className="main-container create">
            <h2>Create New Recipe</h2>
            <form className="create-form" onSubmit={createRecipe} method="POST" >
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
                        <input type="text" name="imgUrl"/>
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
                <input className="main-btn" type="submit" value="Add Recipe" />
            </form>
        </div>
    )
}

export default CreateRecipe;