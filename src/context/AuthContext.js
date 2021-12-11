import { createContext, useState } from 'react'

export const AuthContext = createContext();

const initialState = {
    ownerId : "",
    email : ""
}

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState(initialState);


    const login = (email) => {
        setUser (
            email,
        )

    }
    return (
        <AuthContext.Provider value = {{user, login}}>
            {children}
        </AuthContext.Provider>
    )
}