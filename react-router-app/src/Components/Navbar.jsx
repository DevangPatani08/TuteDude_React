import React from "react";
import logo from '../assets/react.svg'
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navBar">
            <div className="container left">
                <Link to='/'><img src={logo} alt="Logo" srcset="" /></Link>
            </div>
            <div className="container center">
                <ul className="navlink-container">
                    <Link className="navlink" to='/'>home</Link>
                    <Link className="navlink" to='/about'>about us</Link>
                    <Link className="navlink" to='/contact'>get in touch</Link>
                </ul>
            </div>
            <div className="container right">
                <button type="button" className="btn">Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;