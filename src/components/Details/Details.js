import './Details.css'

import uniqid from 'uniqid';

import { Link, useParams } from 'react-router-dom'
import { useContext, useState } from 'react';
import * as recipeService from '../../services/getInfoRecipe';
import { AuthContext } from '../../context/AuthContext';
import useRecipeState from '../../hooks/useRecipeState';
import Notification from './Notification/Notification';
import Comments from './Comments/Comments';

const Details = ({
    history
}) => {
    const { user } = useContext(AuthContext);
    const { objectId } = useParams();
    const [recipe, setRecipe] = useRecipeState(objectId);
    const [modalShow, setModalShow] = useState(false);
    const userToken = user["user-token"];

    const deleteRecipeHandler = (e) => {
        e.preventDefault();
        recipeService.detele(objectId, userToken)
            .then(() => {
                history.push('/my-recipes');
            })
            .finally(() => {
                setModalShow(false);
            })
    };

    const addCommentHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { comment } = Object.fromEntries(formData);
        let myNewComment = {    
            comment: comment,
            userId: uniqid(),
            username: user.username 
        };
        const userComments = recipe.comments;

        recipeService.addComment(objectId, userToken, recipe)
        .then((recipe) => {   
         if (recipe.comments) {
            setRecipe({ ...recipe, comments: [...userComments, myNewComment]})
        } else {
            setRecipe({ ...recipe, comments: [myNewComment]})
        }})
    }
    
    const guestActions = (
        <div className="user-actions">
            <Link to={`/edit/${objectId}`} ><button className="main-btn" >Edit</button></Link>
            <a href="#" onClick={() => setModalShow(true)}><button className="main-btn" >Delete</button></a>
        </div>);

    const addCommnetBox = (
        <div>
            <h3>Hi {user.username}, You can add a comment here</h3>
            <form className="create-form" method="POST" onSubmit={addCommentHandler}  >
                <textarea type="text" name="comment" className="comment-input" />
                <button className="main-btn" >Add comment</button>
            </form>
        </div>
    )

    const newCommnetOnClick = (
            (recipe.comments)
            ? (recipe.comments).map(c => <Comments comment={c.comment} key={c.userId} user={c.username}/> )
            : <p>No Comments</p>
    )
    
    return (
        <>
            <Notification
                show={modalShow}
                close={() => setModalShow(false)}
                onDelete={deleteRecipeHandler}
            />
            <div className="main-container details">
                <div className="recipies-section">
                    <div className="info-box">
                        <div className="details-img-holder">
                            <img className="image-details" src={recipe.imgUrl} alt="Lemon Tart" width="50" height="75" />
                        </div>
                        <div className="text-holder">
                            <h3>{recipe.name}</h3>
                            <h4>Description</h4>
                            <p>{recipe.description}</p>
                            <h4>Ingredients</h4>
                            <p>{recipe.ingredients}</p>
                            <h4>Type:</h4>
                            <div className="recipe-type">{recipe.type}</div>
                            {(user.ownerId) && user.ownerId === recipe.ownerId
                                ? guestActions
                                : null}
                        </div>
                    </div>

                    <div className="comments">
                        <h3>Comments</h3>
                        {newCommnetOnClick}
                    </div>
                    <div className="add-comment-box">
                        {(user.ownerId) && user.ownerId !== recipe.ownerId
                            ? addCommnetBox 
                            : null}
                    </div>

                </div>

            </div>
        </>
    );
}

export default Details;