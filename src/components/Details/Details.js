import './Details.css'


import { Link, useParams, useHistory } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import * as recipeService from '../../services/getInfoRecipe';
import { AuthContext } from '../../context/AuthContext';

const Details = () => {
    const history = useHistory();
    const [recipe, setRecipe] = useState({});
    const [ingr, setIngredients] = useState({});
    const { user } = useContext(AuthContext);
    const { objectId } = useParams();

    const userToken = user["user-token"];

    useEffect(() => {
        recipeService.getRecipe(objectId)
            .then(result => {
                setRecipe(result)
                setIngredients(Object.values(result.ingredients));
            })
            .catch(err => { console.log(err) })

    }, [objectId]);


    const deleteRecipe = (e) => {
        e.preventDefault();

        recipeService.detele(objectId, userToken)
            .then(() => {
                history.push('/');
            });
    };


    const guestActions = (
        <div className="user-actions">
            <button className="main-btn" ><Link to="edit">Edit</Link></button>
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
                        <ul>
                            {ingr.length > 0 &&
                                ingr.map
                                    (x => <li key={x}>{x}</li>)}
                        </ul>
                        {user.email
                        ? guestActions
                        : null }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Details;