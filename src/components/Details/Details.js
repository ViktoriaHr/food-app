import { Link, useParams } from 'react-router-dom'
import './Details.css'
import { useState, useEffect } from 'react';
import * as recipeService from '../../services/getInfoRecipe';


const Details = ({ history,
    location, match }) => {

    console.log(match.params);

    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();

    useEffect(() => {
        recipeService.getRecipe(recipeId)
            .then(result => {
                setRecipe(result);
            })
    }, [recipeId]);


    return (
        <div className="main-container">
            <div className="recipies-section">
                <div className="info-box">
                    <div className="img-holder">
                        <img src={recipe.imgUrl} alt="Lemon Tart" width="50" height="75" />
                    </div>
                    <div className="text-holder">
                        <h3>{recipe.name}</h3>
                        <p>{recipe.description}</p>

                    <div className="user-actions">
                        <button className="main-btn" ><Link to="edit">Edit</Link></button>
                        <button className="main-btn" ><a  href="#" >Delete</a></button>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Details;