const baseUrl = 'https://zazzyparcel.backendless.app';



export const register = async (email, password) => {
    let result = await fetch(`${baseUrl}/api/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    let jsonResult = await result.json();
    if (result.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
        
};

export const login = async (email, password) => {
    let result = await fetch(`${baseUrl}/api/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ "login": email, "password" : password })
    });

    let jsonResult = await result.json();

    if (result.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
};


export const logout = async (ownerId) => {
    return await fetch (`${baseUrl}/api/users/logout`, {
        method: 'GET',
        headers: {
            'user-token': ownerId
        }
    })
};