import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h2>About Us</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>We are a passionate team dedicated to creating innovative solutions that make people's lives easier. Founded in 2020, we've grown from a small startup to a trusted name in our industry.</p>
                    <p>Our mission is to deliver high-quality products with exceptional customer service. We believe in transparency, integrity, and continuous improvement.</p>
                </div>
                <div className="about-image">
                    <img src="https://via.placeholder.com/400x300" alt="Our team" />
                </div>
            </div>
            <div className="team-section">
                <h3>Meet Our Team</h3>
                <div className="team-members">
                    <div className="team-member">
                        <div className="member-image"></div>
                        <h4>John Doe</h4>
                        <p>CEO & Founder</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image"></div>
                        <h4>Jane Smith</h4>
                        <p>CTO</p>
                    </div>
                    <div className="team-member">
                        <div className="member-image"></div>
                        <h4>Mike Johnson</h4>
                        <p>Lead Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;