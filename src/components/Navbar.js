import React from 'react';
import Link from 'gatsby-link';

import logo from '../img/rise-logo-final.png';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img
              src={logo}
              alt="Rise Birth Services"
              className="db w5 center"
            />
          </figure>
        </Link>
      </div>
      <div className="navbar-start flex justify-center">
        <Link className="navbar-item ml2 pink link underline-hover" to="/about">
          About
        </Link>
        <Link
          className="navbar-item ml2 pink link underline-hover"
          to="/products"
        >
          Products
        </Link>
      </div>
      <div className="navbar-end" />
    </div>
  </nav>
);

export default Navbar;
