import { createContext, useState } from 'react'

export const AuthContext = createContext();

const initalValue = {
    ownerId: "",
    email: ""
}

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState(initalValue);

    const login = (data) => {
        setUser(
            data
        )
        console.log(data);
    }

    const logout = () => {
        setUser(initalValue);
    };
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}