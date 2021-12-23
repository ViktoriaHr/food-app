const baseUrl = 'https://zazzyparcel.backendless.app/api/data'

export async function getAll() {
    const response = await fetch(`${baseUrl}/recipes`)
    const res = await response.json();
    return res;
}


export async function getMyRecipes( ownerId ) {
    const response = await fetch(`${baseUrl}/recipes?where=ownerId%20%3D%20%27${ownerId}%27`);
    const res = await response.json();
    return res;

}

export async function getByType( type ) {
    const response = await fetch(`${baseUrl}/recipes?where=type%20%3D%20%27${type}%27`);
    const res = await response.json();
    return res;

}

export const getRecipe = (objectId) => {
    return fetch(`${baseUrl}/recipes/${objectId}`)
        .then(res => res.json());

};


export const create = async (data, token) => {
    let response = await fetch(`${baseUrl}/recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(data)
    });

    let jsonResult = await response.json();
    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }  
};


export const detele = (recipeId, token) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'user-token': token,
        }
    }).then(result => result.json());
}


export const update = async (recipeId, token, newData) => {
    const response = await fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(newData)
    });
    let result = await response.json();
    
    if (response.ok) {
        return result;
    } else {
        throw result;
    }  
};


export const addComment = async (recipeId, token, recipe) => {
    console.log(recipe);
    const response = await fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(recipe)
    });
    const result = await response.json();
    return result;
}

