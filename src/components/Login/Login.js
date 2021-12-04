import './Login.css';

const Login = () => {
    const submitHandler = (e) => {
        e.preventDefault();
  
        let formData = new FormData(e.currentTarget);
         
        let password = formData.get('passward');
        let username = formData.get('username');

        console.log(password);
        console.log(username);
    }

    return (
            <div class="main-container">
                <img src="/assets/berries.jpg" alt="Online Booking Image" />
                    <form class="login-form" method="POST" onSubmit={submitHandler}>
                        <h2>Login Here</h2>
                    <ul>
                        <li><input type="text" name="username" placeholder="Username"/></li>
                        <li><input type="email" name="email" placeholder="Email" /></li>
                        <li><input type="password"  name="password" placeholder="Password" /></li>
                        <li><input type="password" name="repeat-pass" placeholder="Repeat Password" /></li>
                    </ul>
                    <div className="btn-auth">
                        <button type="submit" class="login-btn">Login</button>
                        <button type="submit" class="login-btn">Register</button>
                    </div>
                </form>
        </div>

    )

}

export default Login;