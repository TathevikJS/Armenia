import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav className="navbar navbar-expand-lg navbar-dark " >
        <NavLink className="navbar-brand" to="/">Armenia</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Cards">Discover</NavLink>
            </li>
            {
              localStorage.token ?
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Profile">Profile</NavLink>
                </li> : null
            }
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;