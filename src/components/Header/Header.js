import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import './Header.css';

import { AuthContext } from '../../context/AuthContext'


const Header = () => {
    const { user } = useContext(AuthContext);


    const guestNav = (
        <ul>
            <li className="m-menu show"><NavLink activeClassName="selected" to="/login">Login</NavLink></li>
            <li className="m-menu show"><NavLink activeClassName="selected" to="/register">Sing Up</NavLink></li>
        </ul>
    );

    const userNav = (
        <ul>
            <li className="user-name">{user.email}</li>
            <li className="m-menu show"><NavLink activeClassName="selected" to="/logout">Logout</NavLink></li>

        </ul>
    );


    return (
        <header className="main-navi">
            <div className="left-side">
                <span className="logo-fitness"><NavLink to="/" >Home</NavLink></span>
                <ul>
                    <li className="m-navi">Menu</li>
                    <li className="m-menu show"><NavLink to="/">Home</NavLink></li>
                    <li className="m-menu show"><NavLink activeClassName="selected" to="/recipes">Recipes</NavLink></li>
                    <li className="m-menu show"><NavLink activeClassName="selected" to="/contacts">Contacts</NavLink></li>
                </ul>
            </div>
            <div className="right-side">
            {user.email
                        ? userNav
                        : guestNav
                    }
            </div>
        </header>
    );
}

export default Header;