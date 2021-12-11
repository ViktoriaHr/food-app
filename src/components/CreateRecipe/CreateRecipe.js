import './CreateRecipe.css'
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import * as recipeService from '../../services/getInfoRecipe'

const CreateRecipe = () => {
        const history = useHistory();
        const { user } = useContext(AuthContext);
        const userToken = user["user-token"];

        const createRecipe =(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            
            const name = formData.get('name');
            const description = formData.get('description');
            const ingredients = formData.get('ingredients');
            const imgUrl = formData.get('imgUrl');
            

            recipeService.create({
                name,
                description,
                ingredients,
                imgUrl
            }, userToken) 
            .then((data) => {
                console.log(data);
                history.push('/');
            })

        }
        return (
        <div className="main-container create">
                <h2>Create New Recipe</h2>
                <form className="create-form" onSubmit={createRecipe} method="POST" >
                    <p>
                        <label htmlFor="name">Name</label>
                        <span>
                            <input type="text" name="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="ingredients">Ingredients</label>
                        <span>
                            <textarea name="ingredients"  placeholder="Eggs, Oil ..."></textarea>
                        </span>
                    </p>
                    <p>
                        <label htmlFor="description">Description</label>
                        <span>
                            <textarea name="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p>
                        <label htmlFor="image">Image</label>
                        <span>
                            <input type="text" name="imgUrl"  placeholder="Image" />
                        </span>
                    </p>

                    {/* <p>
                        <label htmlFor="type">Type</label>
                        <span>
                            <select name="type">
                                <option value="breakfast">Breakfast</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Drinks">Drinks</option>
                            </select>
                        </span>
                    </p>
                    */}
                    <input type="submit" value="Add Recipe" />
                </form>
            </div>
    )
}

export default CreateRecipe;