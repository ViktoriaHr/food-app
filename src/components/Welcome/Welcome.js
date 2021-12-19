import './Welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="main-container welcome">
            <img src="/assets/light.jpg" alt="Welcome Image" className="welcome-img"/>
            <div className="text-c">
                <div className="header-main">
                    <h1>Welcome to our recipe diaries</h1>
                </div>
                <div className="login-btn">
                    <span>Click here if you want to share your recipes with us</span>
                </div>
                <Link to="/login"><button className="main-btn home-btn">Login</button></Link>
            </div>
        </div>
    );
}

export default Welcome;
