// Mod.js

import "./Mod.css";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';


export default function Mod(props) {
  

  const navLinkStyle = {
    color: 'white',
  };

  return (
    <div className="body">
      <nav className="navbar  navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <h4 className="navbar-brand" to="/">
            {props.title}<span className='head'>{props.title2}</span>
          </h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to=""
                  className="nav-link"
                  isActive={(match, location) => {
                    if (!match) return false;
                    return true;
                  }}
                  style={({ isActive }) => (isActive ? { color: '#D24545' } : navLinkStyle)}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="request"
                  className="nav-link"
                  isActive={(match, location) => {
                    // Add your logic to determine if the NavLink is active
                  }}
                  style={({ isActive }) => (isActive ? { color: '#D24545' } : navLinkStyle)}
                >
                  Request
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="about"
                  className="nav-link"
                  isActive={(match, location) => {
                    // Add your logic to determine if the NavLink is active
                  }}
                  style={({ isActive }) => (isActive ? { color: '#D24545' } : navLinkStyle)}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="login/singup"
                  className="nav-link"
                  isActive={(match, location) => {
                    // Add your logic to determine if the NavLink is active
                  }}
                  style={({ isActive }) => (isActive ? { color: '#D24545' } : navLinkStyle)}
                >
                  Log in <i className="user fa-regular fa-user"></i>
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                // Call handleSearch function on click
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <br />
    </div>
  );
}

Mod.propTypes = {
  title: PropTypes.string.isRequired,
};

Mod.defaultProps = {
  title: "Shadow Movies",
};
