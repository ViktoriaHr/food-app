 import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="main-container">
            <div className="text-c">
            <h1>Your Recipe <strong>Diaries</strong></h1>
                 <p>
                    The best collection of Healty food recipes.
                    A Food Blog designed to delight your palate
                </p>
            </div>
           
            <button className="main-btn" ><Link to="login">Login</Link></button>
        </div>
    );
}

export default Welcome;