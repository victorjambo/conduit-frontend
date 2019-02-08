import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-light">
    <div className="container">
      <Link className="navbar-brand" to="/">Authors Haven</Link>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create-article">
            <i className="ion-compose"></i>&nbsp;New Article
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/settings">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Sign up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
