const baseUrl = 'https://zazzyparcel.backendless.app/api/data'

export async function getAll() {
    const response = await fetch(`${baseUrl}/recipes`)
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

    let result = await response.json();

    return result;
};
