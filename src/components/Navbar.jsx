import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  var navStyle = {
    paddingLeft: '2%',
    paddingRight: '2%',
    backgroundColor: 'blue',
    fontFamily: 'Tomorrow, sans-serif',
    fontWeight: 'bold'

  };

  return (
    <nav style={navStyle}>
      <div className="nav-wrapper">
        <i className="fas fa-beer fa-4x"></i>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/bar">New Game</Link></li>
          <li><Link to="/">Rules</Link></li>
        </ul>
      </div>
    </nav>

  );
}
        
export default Navbar;
