import React from "react";


const About = () => {
    return (
        <div className="super-container">
            <div className="wrapper about">
                <div className="about-top">
                    <h1 className="heading-h1">About Us</h1>
                    <p className="text-about">
                        We are a passionate team dedicated to crafting innovative solutions that drive progress and create lasting impact. Our mission is to bridge the gap between complex challenges and elegant, user-centric designs.
                    </p>
                    <p className="text-about">
                        Founded on the principles of creativity, collaboration, and continuous improvement, we strive to exceed expectations and deliver exceptional value to our clients and community.
                    </p>
                    <p className="text-about">
                        Our expertise spans across various domains, ensuring a holistic approach to every project we undertake. We believe in the power of technology to transform lives and businesses.
                    </p>
                </div>
                <div className="about-bottom">
                    <h2 className="heading-h2">Our Values</h2>
                    <div className="value-container">
                        <div className="value-box">
                            <h3 className="heading-h3">Innovation</h3>
                            <p className="box-body">Constantly seeking new ideas and approaches.</p>
                        </div>
                        <div className="value-box">
                            <h3 className="heading-h3">Integrity</h3>
                            <p className="box-body">Operating with honesty and strong moral principles.</p>
                        </div>
                        <div className="value-box">
                            <h3 className="heading-h3">Excellence</h3>
                            <p className="box-body">Committed to delivering high-quality results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;