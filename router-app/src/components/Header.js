import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <NavLink to="/">MyApp</NavLink>
            </div>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/user-info">User Info</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;