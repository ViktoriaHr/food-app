import './Details.css'

import { Link, useParams, useHistory } from 'react-router-dom'
import {   useContext } from 'react';
import * as recipeService from '../../services/getInfoRecipe';
import { AuthContext } from '../../context/AuthContext';
import CommentBox from './Comments/Comments';
import useRecipeState from '../../hooks/useRecipeState'



const Details = () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const { objectId } = useParams();
    const [recipe, setRecipe] = useRecipeState(objectId);

    const userToken = user["user-token"];



    const deleteRecipe = (e) => {
        e.preventDefault();

        recipeService.detele(objectId, userToken)
            .then(() => {
                history.push('/');
            });
    };


    const guestActions = (
        <div className="user-actions">
            <Link to={`/edit/${objectId}`} ><button className="main-btn" >Edit</button></Link>
            <button className="main-btn" ><a href="#" onClick={deleteRecipe} >Delete</a></button>
        </div>);


    return (
        <div className="main-container">
            <div className="recipies-section">
                <div className="info-box">
                    <div className="details-img-holder">
                        <img src={recipe.imgUrl} alt="Lemon Tart" width="50" height="75" />
                    </div>
                    <div className="text-holder">
                        <h3>{recipe.name}</h3>
                        <p>{recipe.description}</p>
                        <p>{recipe.ingredients}</p>
                        <p>{recipe.type}</p>
                        {user.email
                            ? guestActions
                            : null}
                    </div>
                </div>
                {user.email
                    ? <CommentBox user={user} recipe={recipe}/>
                    : null}
            </div>

        </div>
    );
}

export default Details;