import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container text-center text-md-start">
                <div className="row text-center text-md-start">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Company</h5>
                        <p><Link to="/about" className="text-white" style={{ textDecoration: 'none' }}>About Us</Link></p>
                        <p><Link to="/services" className="text-white" style={{ textDecoration: 'none' }}>Our Services</Link></p>
                        <p><Link to="/privacy" className="text-white" style={{ textDecoration: 'none' }}>Privacy Policy</Link></p>
                        <p><Link to="/affiliates" className="text-white" style={{ textDecoration: 'none' }}>Affiliated Program</Link></p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Get Help</h5>
                        <p><Link to="/faqs" className="text-white" style={{ textDecoration: 'none' }}>FAQs</Link></p>
                        <p><Link to="/shipping" className="text-white" style={{ textDecoration: 'none' }}>Shipping</Link></p>
                        <p><Link to="/returns" className="text-white" style={{ textDecoration: 'none' }}>Returns</Link></p>
                        <p><Link to="/order-status" className="text-white" style={{ textDecoration: 'none' }}>Order Status</Link></p>
                        <p><Link to="/payment-options" className="text-white" style={{ textDecoration: 'none' }}>Payment Options</Link></p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Online Shop</h5>
                        <p><Link to="/shop/watches" className="text-white" style={{ textDecoration: 'none' }}>Watch</Link></p>
                        <p><Link to="/shop/bags" className="text-white" style={{ textDecoration: 'none' }}>Bags</Link></p>
                        <p><Link to="/shop/shoes" className="text-white" style={{ textDecoration: 'none' }}>Shoes</Link></p>
                        <p><Link to="/shop/dress" className="text-white" style={{ textDecoration: 'none' }}>Dress</Link></p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Follow Us</h5>
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <a href="#" className="btn-floating btn-sm text-white fs-4"><i className="fab fa-facebook"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn-floating btn-sm text-white fs-4"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn-floating btn-sm text-white fs-4"><i className="fab fa-instagram"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="btn-floating btn-sm text-white fs-4"><i className="fab fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <hr className="mb-4" />
                
                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-center text-md-start">Copyright ©2025 All rights reserved by:
                            <a href="#" style={{ textDecoration: 'none' }}><strong className="text-primary"> The Providers</strong></a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;