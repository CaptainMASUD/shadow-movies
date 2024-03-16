import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import "./Mod.css";
import PropTypes from "prop-types";
import Cards from './Card';


export default function Mod(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [cardData, setCardData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  

  const handleHomeClick = () => {
    navigate('/');
  }

  useEffect(() => {
    // Fetch data from JSON file
    fetch('/cardData.json')
      .then(response => response.json())
      .then(data => setCardData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    // If search term is empty, do not proceed
    if (!searchTerm.trim()) {
      // Optionally, you can display a message to the user indicating that the search term is empty
      return;
    }
  
    // Filter the cards based on the search term
    const filtered = cardData.filter(card => card.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredCards(filtered);
  
    // Navigate to the searchfound path only if there are matching cards
    if (filtered.length > 0) {
      navigate('/searchfound');
    }
  };

  const getNavLinkStyle = (route) => {
    return {
      color: location.pathname === route ? '#D24545' : 'white',
    };
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
                <NavLink exact to="/" className="nav-link" activeClassName="active" style={getNavLinkStyle('/')}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/request" className="nav-link" activeClassName="active" style={getNavLinkStyle('/request')}>
                  Request
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/about" className="nav-link" activeClassName="active" style={getNavLinkStyle('/about')}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/login/singup" className="nav-link" activeClassName="active" style={getNavLinkStyle('/login/singup')}>
                  Log in <i className="user fa-regular fa-user"></i>
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <br />
      {/* Conditionally render the Cards component or a message */}
      {location.pathname === '/searchfound' && filteredCards.length > 0 && (
        <Cards cardData={filteredCards} />
      )}
      {location.pathname === '/searchfound' && filteredCards.length === 0 && (
        <div className="message" style={{color:"#D24545",fontSize:"1.5rem",textAlign:"center",padding:"5px",backgroundColor:"white"}}>No match found go  <button onClick={handleHomeClick} style={{border:"none",background:"none",color:"red",textDecoration:"underline"}}>home</button> </div>
      )}
    </div>
  );
}

Mod.propTypes = {
  title: PropTypes.string.isRequired,
};

Mod.defaultProps = {
  title: "Shadow Movies",
};
