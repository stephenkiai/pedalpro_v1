import React, { useState } from 'react';
import '../assets/css/topbar.css';
import { BsSearch, BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main">
      <div className={`topbar ${menuOpen ? 'open' : ''}`}>
        <div className="toggle" onClick={toggleMenu}>
          <BsList size="1.5em" />
        </div>

        <div className="links">
          <a href="/">Home</a>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/contactUs">Contact Us</Link>
        </div>

        <div className="search">
          <label>
            <input type="text" placeholder="Search here - Coming Soon" />
            <BsSearch size="1.2em" className="search-icon" />
          </label>
        </div>

        <div className="auth">
        <Link to="/">
              <span className="title">Log Out</span>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
