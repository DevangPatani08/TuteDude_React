import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="super-container">
            <div className="wrapper home">
                <h1 className="heading-h1">Welcome to Our Visionary World</h1>
                <p className="text-home"> Innovating the future, one solution at a time. Discover how we empower businesses and individuals.</p>
                <Link to="/about" className="btn-learn">Learn More</Link>
            </div>
        </div>
    );
};

export default Home;