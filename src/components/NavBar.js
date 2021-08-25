/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-enable */

const NavBar = () => (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand strong font-weight-bold" to="/">BookStore CMS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/books">Books</Link>
            <Link className="nav-link" to="/categories">Categories</Link>
          </div>
        </div>
      </div>
    </nav>
);
export default NavBar;