import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        </footer>
    );
};

export default Footer;