import './Login.css';
import * as authService from '../../services/authService';

const Login = ({history }) => {
    const onLogin = (e) => {
        e.preventDefault();
  
        let formData = new FormData(e.currentTarget);
         
        let email = formData.get('email');
        let password = formData.get('password');
   

        authService.login(email, password)
            .then(data => { console.log(data)})
            .catch(err => {
                //show notif
                console.log(err)
            })


        const a = history.push('/')

    }

    return (
            <div className="main-container">
                <img src="/assets/berries.jpg" alt="Online Booking Image" />
                    <form className="login-form" method="POST" onSubmit={onLogin}>
                        <h2>Login Here</h2>
                    <ul>
                        <li><input type="text" name="username" placeholder="Username"/></li>
                        <li><input type="email" name="email" placeholder="Email" /></li>
                        <li><input type="password"  name="passward" placeholder="Password" /></li>
                    </ul>
                    <div classNameName="btn-auth">
                        <button type="submit" className="main-btn">Login</button>
                    </div>
                </form>
        </div>

    )

}

export default Login;