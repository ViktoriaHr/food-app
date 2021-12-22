import './Welcome.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Welcome = () => {
    const { user } = useContext(AuthContext);
    const userBtns = (
        <>
            <div className="login-text">
                <span>Click here if you want to share your recipes with us</span>
            </div>
            <div className="btn-log">
                <Link to="/login"><button className="main-btn home-btn">Login</button></Link>
                <Link to="/register"><button className="main-btn home-btn">Sing Up</button></Link>
            </div>
        </>)
    return (
        <div className="main-container welcome">
            <img src="/assets/light.jpg" alt="Welcome Image" className="welcome-img" />
            <div className="text-c">
                <div className="header-main">
                    <h1>Welcome to our Recipe Diaries</h1>
                </div>
                {user.email ? null : userBtns}

            </div>
        </div>
    );
}

export default Welcome;
