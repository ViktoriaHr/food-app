import { createContext, useState } from 'react'

export const AuthContext = createContext();

const initialState = {
    ownerId: "",
    email: ""
}

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState(initialState);

    const login = (data) => {
        setUser(
            data
        )
        console.log(data);
    }

    const logout = () => {
        setUser(initialState);
    };
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}