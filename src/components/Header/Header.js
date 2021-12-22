import './Header.css';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
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
            <li className="user-name">Welcome, {user.username}</li>
            <li className="m-menu show"><NavLink activeClassName="selected" to="/create">Add New Recipe</NavLink></li>
            <li className="m-menu show"><NavLink activeClassName="selected" to="/my-recipes">My Recipes</NavLink></li>
            <li className="m-menu show"><NavLink activeClassName="selected" to="/logout">Logout</NavLink></li>

        </ul>
    );


    return ( 
        <header className="main-navi">
            <div className="left-side">
                <span className="logo-site"><NavLink to="/" >Home</NavLink></span>
                <ul>
                    <li className="m-navi">Menu</li>
                    <li className="m-menu show"><NavLink activeClassName="selected" to="/home">Home</NavLink></li>
                    <li className="m-menu show"><NavLink activeClassName="selected" to="/recipes">Recipes</NavLink></li>
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