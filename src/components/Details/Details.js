import './Details.css'
import uniqid from 'uniqid';

import { Link, useParams } from 'react-router-dom'
import { useContext, useState } from 'react';

import * as recipeService from '../../services/getInfoRecipe';
import { AuthContext } from '../../context/AuthContext';
import useRecipeState from '../../hooks/useRecipeState';
import Confirm from '../Notifications/Confirm';
import Comments from './Comments/Comments';

const Details = ({
    history
}) => {
    const { user } = useContext(AuthContext);
    const { objectId } = useParams();
    const [recipe, setRecipe] = useRecipeState(objectId);
    const [modalShow, setModalShow] = useState(false);
    const userToken = user["user-token"];
    const date = new Date(recipe.created);    

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
        let userNewComment = {    
            comment: comment,
            userId: uniqid(),
            username: user.username 
        };

        let userComments = recipe.comments;
        let newData = {};
        if(recipe.comments) {
            newData = ({ ...recipe, comments: [...userComments, userNewComment]});
        } else {
            newData = ({ ...recipe, comments: [userNewComment]})
        }
        recipeService.addComment(objectId, userToken, newData)
        .then((res) => {   
            setRecipe(res)
        })
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
            : <p>No Comments yet</p>
    )
    return (
        <>
            <Confirm
                show={modalShow}
                close={() => setModalShow(false)}
                onConfirm={deleteRecipeHandler}
                showQuestion = {"Are you sure you want to delete this recipe?"}
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
                            <div className="additional-data">
                                <div>
                                    <h4>Type:</h4>
                                    <div className="recipe-type">{recipe.type}</div>
                                </div>
                                <div>
                                    <h4>Created on:</h4>
                                    <div>{(recipe.created) ? date.toLocaleDateString() : null }</div>
                                </div>

                            </div>
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