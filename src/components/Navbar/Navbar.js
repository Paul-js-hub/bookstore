import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div>
    <nav className="nav-container">
      <h3>Bookstore CMS</h3>
      <ul>
        <div className="list-container">
          <li className="list-item"><Link to="/">Books</Link></li>
          <li className="list-item"><Link to="/categories">Categories</Link></li>
        </div>
      </ul>
    </nav>
  </div>
);

export default Navbar;
