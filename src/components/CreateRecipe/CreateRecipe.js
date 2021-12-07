import './CreateRecipe.css'


const CreateRecipe = () => {
    return (
        <div className="main-container create">
                <h2>Create New Recipe</h2>
                <form className="create-form" method="POST" >
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl"  placeholder="Image" />
                        </span>
                    </p>

                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select name="type">
                                <option value="breakfast">Breakfast</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Dessert">Dessert</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Drinks">Drinks</option>
                            </select>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="ingredients">Ingredients</label>
                        <span className="input">
                            <textarea name="ingredients"  placeholder="Eggs, Oil ..."></textarea>
                        </span>
                    </p>
                    <input className="submit" type="submit" class="main-btn" value="Add Recipe" />
                </form>
            </div>
    )
}

export default CreateRecipe;