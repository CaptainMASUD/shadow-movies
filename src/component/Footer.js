import React from 'react';
import { Link } from 'react-router-dom';
import "./Mod.css";

export default function Footer(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fmain">
      {/* <div className="flogo">
        <h4 className="navbar-brand" to="/">
          {props.title}<span className='head'>{props.title2}</span>
        </h4>
      </div> */}
      <div className="sflogo">
        <i className="fa-brands fa-discord"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-github"></i>
        <Link to="#" onClick={scrollToTop} className="upbtn">
          <i className="fa-solid fa-chevron-up"></i>
        </Link>
      </div>
      <div className="copyright">
        &copy; all rights reserved for Shadow Movies
      </div>
    </div>
  );
}
