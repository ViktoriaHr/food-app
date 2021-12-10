
import {Link } from 'react-router-dom'
import { useEffect, useState } from 'react';


const SingleRecipe = ({
    recipe
}) => {

    return (
        <div className="info-boxes">
            <div className="img-holder">
                <img src={recipe.imgUrl} alt={''} />
            </div>
            <div className="info-holder">
                <h3>{recipe.name}</h3>
                <p>{ 
                recipe.description.split(' ').length > 50
                ? recipe.description.split(' ').join(' ').slice(0, 150) + "..."
                : recipe.description } </p>
                <Link className="read-more-btn" to={`details/${recipe.objectId}`}>See full recipe</Link>
            </div>
        </div>)
}

export default SingleRecipe;