import React from 'react';
import { Link, Route } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import './Navbar.css';

const navbar = () => {
  const firebase = useFirebase();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img 
            // src={require("../../../assets/students_5.jpg")}
            src={require("../../../assets/s3.png")}
            height="50px"
            width="80px"
            alt="logo" 
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="dropdownContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="dropdownContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link to="/studentForm" className="btn btn-light mr-3">
                Add Student
              </Link>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                <img
                  src={require("../../../assets/zahraamanli.jpeg")}
                  alt="admin"
                  height="40px"
                />
                <span className="ml-2 navbar-text">Zahra Amanli</span>  
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="!#">
                  Profile
                </a>
                <a
                  className="dropdown-item"
                  href="!#"
                  onClick={() => firebase.logout()}
                >
                  Logout
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="!#">
                  Ads
                </a>
              </div>
        </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;