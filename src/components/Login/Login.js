import './Login.css';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react'

import * as authService from '../../services/authService';
import { AuthContext } from '../../context/AuthContext'


const Login = ({
    history
}) => {
    const { login } = useContext(AuthContext)
    let [error, setError] = useState();

    const onLogin = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        authService.login(email, password)
            .then((data) => {
                login(data)
                history.push('/recipes');
            })
            .catch(err => {
                setError(err.message);
                console.log(err.message); 
            })
    }

    return (
            <div className="main-container">
                <img src="/assets/berries.jpg" alt="Online Booking Image" />
                <form className="login-form" method="POST" onSubmit={onLogin}>
                    <h2>Login Here</h2>
                    <div className="error">
                        <p>{error}</p>
                    </div>
                    <ul>
                        <li><input type="email" name="email" placeholder="Email" /></li>
                        <li><input type="password" name="password" placeholder="Password" /></li>
                    </ul>
                    <div className="btn-auth">
                        <button type="submit" className="main-btn">Login</button>
                    </div>
                </form>
            </div>
    )
}

export default Login;