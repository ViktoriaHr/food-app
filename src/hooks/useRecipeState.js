import {  useState, useEffect } from "react";

import * as recipeService from '../services/getInfoRecipe';

const useRecipeState = (objectId) =>{

    const [recipe, setRecipe] = useState({});
    useEffect(()=>{
        
    },[])
    
    useEffect(() => {
        recipeService.getRecipe(objectId)
            .then(result => {
                setRecipe(result)
            })
            .catch(err => { console.log(err) })

    }, [objectId]);

    return[recipe, setRecipe]

}
export default useRecipeState;