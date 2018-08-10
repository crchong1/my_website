import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import $ from 'jquery'; 

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <nav className="navbar navbar-expand-lg sticky-top navbar-light website-navbar">
        <a className="navbar-brand" href="/">{/* insert img here*/}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-header website-nav-item pr-4">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item nav-header website-nav-item pr-4">
              <NavLink to="/about" className="nav-link">About Me</NavLink>
            </li>
            <li className="nav-item nav-header website-nav-item pr-4">
              <NavLink to="/resume" className="nav-link">Resume</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item nav-header website-nav-item">
              <NavLink to="/blog" className="nav-link">Blog</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
