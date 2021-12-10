
import { useHistory } from 'react-router-dom';

import * as authService from '../../services/authService'

const Register = () => {
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
         
        let password = formData.get('password');
        let email = formData.get('email');

        authService.register(email, password)   
        .then(data => {
            console.log(data)


            history.push('/recipes');
        });
    }
    return (
            <div className="main-container">
                <img src="/assets/berries.jpg" alt="Online Booking Image" />
                    <form className="login-form" method="POST" onSubmit={submitHandler}>
                        <h2>Register Now</h2>
                    <ul>
                        <li><input type="text" name ="username" placeholder="Name" /></li>
                        <li><input type="email" name="email" placeholder="Email" /></li>
                        <li><input type="password" name ="password" placeholder="Password" /></li>
                    </ul>
                    <div className="btn-auth">
                        <button type="submit" className="main-btn">Register</button>
                    </div>
                </form>
        </div>

    )

}

export default Register;