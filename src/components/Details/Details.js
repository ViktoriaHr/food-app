import { Link, useParams } from 'react-router-dom'
import './Details.css'
import { useState, useEffect } from 'react';
import * as recipeService from '../../services/getInfoRecipe';


const Details = () => {
    const [recipe, setRecipe] = useState({});
    const [ingr, setIngredients] = useState({});
    const { objectId } = useParams();

    useEffect(() => {
        recipeService.getRecipe(objectId)
            .then(result => {
                setRecipe(result)
                setIngredients(Object.values(result.ingredients));
            })
            .catch(err => { console.log(err) })

    }, [objectId]);

    return (
        <div className="main-container">
            <div className="recipies-section">
                <div className="info-box">
                    <div className="img-holder">
                        <img src={recipe.imgUrl} alt="Lemon Tart" width="50" height="75" />
                    </div>
                    <div className="text-holder">
                        <h3>{recipe.Name}</h3>
                        <p>{recipe.description}</p>

                        <ul>
                            {ingr.length > 0 &&
                            ingr.map
                            (x => <li key={x}>{x}</li>)}
                        </ul>

                        <div className="user-actions">

                            <button className="main-btn" ><Link to="edit">Edit</Link></button>
                            <button className="main-btn" ><a href="#" >Delete</a></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Details;