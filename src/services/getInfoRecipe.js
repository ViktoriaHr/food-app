const baseUrl = 'http://softuni-custom-server-food.herokuapp.com/jsonstore';


export async function getAll() {
    const response = await fetch(`${baseUrl}/food`)
     
    const res = await response.json();
    const result = Object.values(res);

    return result;
}

export const getRecipe = (recipeId) => {
    return fetch(`${baseUrl}/food/${recipeId}`)
    .then(res => res.json());
};