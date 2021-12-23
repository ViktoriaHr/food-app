import './CreateRecipe.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import * as recipeService from '../../services/recipeService';
import ErrorMessage from '../Errors/ErrorMessage'

const CreateRecipe = ({
    history
}) => {
    const { user } = useContext(AuthContext);
    let [error, setError] = useState();

    const userToken = user["user-token"];
    const createRecipe = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { name, description, ingredients, imgUrl, type } = Object.fromEntries(formData)
        recipeService.create({
            name,
            description,
            ingredients,
            imgUrl,
            type,
            authorName: user.username
        }, userToken)
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
            <h2>Create New Recipe</h2>
            <ErrorMessage>{error}</ErrorMessage>
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
                    <label htmlFor="image">Image(url)</label>
                    <span>
                        <input type="text" name="imgUrl"/>
                    </span>
                </p>
                <p>
                <label htmlFor="image">Ingredients</label>
                    <span>
                        <textarea name="ingredients" />
                    </span>                </p>
                <p>
                    <label htmlFor="type">Type</label>
                    <span>
                        <select name="type">
                            <option value="breakfast">Breakfast</option>
                            <option value="dinner">Dinner</option>
                            <option value="dessert">Dessert</option>
                            <option value="snaks">Snaks</option>
                        </select>
                    </span>
                </p>
                <input className="main-btn" type="submit" value="Add Recipe" />
            </form>
        </div>
    )
}
export default CreateRecipe;