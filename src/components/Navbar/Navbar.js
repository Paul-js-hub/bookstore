import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

library.add(faUser);

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {' '}
          <h3 className="logo">Bookstore CMS</h3>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item list-item"><Link to="/">Books</Link></li>
            <li className="nav-item list-item"><Link to="/categories">Categories</Link></li>
          </ul>
          <div className="d-flex user-icon">
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
