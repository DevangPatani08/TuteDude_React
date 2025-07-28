import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="error-container">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <div className="animation">
                    <div className="planet"></div>
                    <div className="rocket"></div>
                </div>
                <Link to="/" className="home-link">Return to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;