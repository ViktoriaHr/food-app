
import './Details.css'

import { Link, useParams } from 'react-router-dom'
import { useContext, useState } from 'react';
import * as recipeService from '../../services/getInfoRecipe';
import { AuthContext } from '../../context/AuthContext';
import useRecipeState from '../../hooks/useRecipeState';
import Notification from '../Notification/Notification';
import Comments from './Comments/Comments';

const Details = ({
    history
}) => {
    const { user } = useContext(AuthContext);
    const { objectId } = useParams();
    const [recipe, setRecipe] = useRecipeState(objectId);
    const userComments = recipe.comments;

    const [modalShow, setModalShow] = useState(false);
    const [newComment, setComment] = useState({});


    console.log(userComments);
    const userToken = user["user-token"];

    const deleteRecipeHandler = (e) => {
        e.preventDefault();

        recipeService.detele(objectId, userToken)
            .then(() => {
                history.push('/recipes');
            })
            .finally(() => {
                setModalShow(false);
            })
    };

    const addCommentHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { comment } = Object.fromEntries(formData)
        const userId = user.ownerId;
        setComment({    
            comment: comment,
            userId: userId,
            username: user.username 
 })

        recipeService.addComment(objectId, userToken, recipe)
            .then((recipe) => {
         console.log(newComment);
                setRecipe(state => ({
                    ...state, comments: [...userComments, newComment]
                }))
            })
    }

    const guestActions = (
        <div className="user-actions">
            <Link to={`/edit/${objectId}`} ><button className="main-btn" >Edit</button></Link>
            <button className="main-btn" ><a href="#" onClick={() => setModalShow(true)} >Delete</a></button>
        </div>);

    const addCommnetBox = (
        <div>
            <div>Hi {user.username}, You can add a comment here</div>
            <form className="create-form" method="POST" onSubmit={addCommentHandler}  >
                <input type="text" name="comment" className="comment-input" />
                <button className="main-btn" >Add a comment</button>
            </form>
        </div>
    )

    return (
        <>
            <Notification
                show={modalShow}
                close={() => setModalShow(false)}
                onDelete={deleteRecipeHandler}
            />
            <div className="main-container">
                <div className="recipies-section">
                    <div className="info-box">
                        <div className="details-img-holder">
                            <img src={recipe.imgUrl} alt="Lemon Tart" width="50" height="75" />
                        </div>
                        <div className="text-holder">
                            <h3>{recipe.name}</h3>
                            <h4>Description</h4>
                            <p>{recipe.description}</p>
                            <h4>Ingredients</h4>
                            <p>{recipe.ingredients}</p>
                            <div className="recipe-type">Type: {recipe.type}</div>
                            {(user.ownerId) && user.ownerId === recipe.ownerId
                                ? guestActions
                                : null}
                        </div>
                    </div>
                    <div className="comments-box">

                    </div>
                    <div className="comments">
                        {
                        (userComments) 
                        ? userComments.map(c => <Comments comment={c.comment} key={c.userId} user={c.username}/> )
                        : "No Comments"}
                    </div>
                    <div className="comment-box">
                        <div>{ }</div>
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