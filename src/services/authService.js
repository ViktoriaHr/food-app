export const login = (email, password) => {
   return fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json',
        },
        body: JSON.stringify({email,password})
    })
    .then(res => {
        if(res.ok) {
            return res.json()
        }
        throw res.json();
    })
}

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;

}

export const isAuth = () => {
    return Boolean(getUser());
} 