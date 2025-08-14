import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <h1>Welcome to Our Website</h1>
                <p>Discover amazing features and services tailored just for you.</p>
                <button className="cta-button">Get Started</button>
            </section>
            <section className="features">
                <div className="feature-card">
                    <h3>Easy to Use</h3>
                    <p>Our platform is designed with simplicity in mind.</p>
                </div>
                <div className="feature-card">
                    <h3>24/7 Support</h3>
                    <p>We're always here to help you with any questions.</p>
                </div>
                <div className="feature-card">
                    <h3>Secure</h3>
                    <p>Your data is protected with industry-leading security.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;