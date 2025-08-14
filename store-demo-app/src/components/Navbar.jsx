import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/products/productsSlice';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        dispatch(setSearchTerm(e.target.value));
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">ShoeStore</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to="/category/mens">Mens</Link></li>
                                <li><Link className="dropdown-item" to="/category/womens">Womens</Link></li>
                                <li><Link className="dropdown-item" to="/category/kids">Kids Section</Link></li>
                                <li><Link className="dropdown-item" to="/category/latest">Latest</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search products..." aria-label="Search" value={searchQuery} onChange={handleSearchChange} />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;