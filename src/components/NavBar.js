/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-enable */

const NavBar = () => (
      <nav className="panel-bg d-flex">
        <Link className="Bookstore-CMS link" to="/">BookStore CMS</Link>
            <Link className="Books link" to="/books">Books</Link>
            <Link className="Books link" to="/categories">Categories</Link>
    </nav>
);
export default NavBar;