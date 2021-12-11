import { useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import * as authService from "../../services/authService";



const Logout = () => {
     const history = useHistory();
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