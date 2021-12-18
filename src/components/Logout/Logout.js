import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import * as authService from "../../services/authService";



const Logout = ({
    history
}) => {
     const { user, logout } = useContext(AuthContext);
     useEffect(() => {
        authService.logout(user.ownerId)
            .then(() => {
                console.log('Logged out');
                logout();
                history.push("/");
                //notification
            })
    }, [])
    return null;
}

export default Logout;