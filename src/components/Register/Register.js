import { useState } from 'react';
import * as authService from '../../services/authService'

const Register = ({
    history
}) => {
    const [error, setError] = useState();
    const submitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let password = formData.get('password');
        let confPass = formData.get('confirmpass');
        let email = formData.get('email');
        let username = formData.get('username');

        if (password=== confPass) {
            authService.register(email, password,username)   
            .then(data => {
                history.push('/login');
                console.log(data)
            })
            .catch(err => {
                setError(err.message);
                if (err.code == "3041") {
                    setError("Please set username!")
                }
                if (err.code == "1155") {
                    setError("This username already exists!")
                }
            })
        } else {
            setError(`Passwords don't match!!`)
        }

        if (password.length<6) {
            console.log(password.length)
            setError('The password shoud contains at least 6 characters!')
        }
    }
    return (
            <div className="main-container">
                <img src="/assets/berries.jpg" alt="Online Booking Image" />
                    <form className="login-form" method="POST" onSubmit={submitHandler}>
                        <h2>Welcome</h2>
                        <h3>Let's create yout account!!</h3>
                        <div className="error">
                            <p>{error}</p>
                        </div>
                    <ul>
                        <li><input type="text" name ="username" placeholder="Name" /></li>
                        <li><input type="email" name="email" placeholder="Email" /></li>
                        <li><input type="password" name ="password" placeholder="Password" /></li>
                        <li><input type="password" name ="confirmpass" placeholder="Repeat Password" /></li>
                    </ul>
                    <div className="btn-auth">
                        <button type="submit" className="main-btn">Register</button>
                    </div>
                </form>
        </div>
    )
}

export default Register;