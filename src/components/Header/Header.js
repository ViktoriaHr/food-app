import { NavLink } from 'react-router-dom';

import './Header.css';


const Header = () => {
    return (
        <header className="main-navi">
        <div className="left-side">
            <span className="logo-fitness"><NavLink to="/" >Home</NavLink></span>
            <ul>
                <li className="m-navi">Menu</li>
                <li className="m-menu show"><NavLink  to="/">Home</NavLink></li>
                <li className="m-menu show"><NavLink activeClassName="selected" to="/recipes">Recipes</NavLink></li>
                <li className="m-menu show"><NavLink activeClassName="selected" to="/contacts">Contacts</NavLink></li>
            </ul>
        </div>
        <div className="right-side">
            <ul>
                <li className="user-name">Name</li>
                <li className="m-menu show"><NavLink activeClassName="selected" to="/login">Login</NavLink></li>
                <li className="m-menu show"><NavLink activeClassName="selected" to="/register">Sing Up</NavLink></li>
            </ul>
        </div>
    </header>
    );
}

export default Header;