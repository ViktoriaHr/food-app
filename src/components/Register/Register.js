const Register = () => {

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
         
        let password = formData.get('passward');
        let username = formData.get('username');

    }
    return (
            <div class="main-container">
                <img src="/assets/berries.jpg" alt="Online Booking Image" />
                    <form class="login-form" method="POST" onSubmit={submitHandler}>
                        <h2>Register Now</h2>
                    <ul>
                        <li><input type="email" placeholder="Email" /></li>
                        <li><input type="password" placeholder="Password" /></li>
                    </ul>
                    <div className="btn-auth">
                        <button type="submit" class="login-btn">Register</button>
                    </div>
                </form>
        </div>

    )

}

export default Register;