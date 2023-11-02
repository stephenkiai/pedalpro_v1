import React from 'react';
import '../assets/css/topbar.css';
import { BsSearch, BsList } from 'react-icons/bs';

const Topbar = () => {
  return (
    <div className="main">
      <div className="topbar">
        <div className="toggle">
          <BsList size="1.5em" />
        </div>

        <div className="search">
          <label>
            <input type="text" placeholder="Search here - Coming Soon" />
            <BsSearch size="1.2em" className="search-icon" /> {/* Add the search-icon class */}
          </label>
        </div>

        <div className="user">
          <img src="../assets/images/wamoni.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
