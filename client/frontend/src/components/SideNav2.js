import React from 'react';
import { FaUsers, FaStore, FaEnvelope, FaBicycle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="container">
      <div className="navigation">
        <ul>
          <li>
          <Link to="/">
              <span className="logo">PedalPro</span>
            </Link>
          </li>

          <li>
          <Link to="/login">
              <span className="icon">
              <FaUsers />
              </span>
              <span className="title">Sign-In</span>
            </Link>
          </li>

          <li>
          <Link to="/register">
              <span className="icon">
              <FaUsers />
              </span>
              <span className="title">Sign-Up</span>
            </Link>
          </li>

          <li>
          <Link to="/liveRide">
              <span className="icon">
              <FaBicycle />
              </span>
              <span className="title">Live-Ride</span>
            </Link>
          </li>

          <li>
          <Link to="/market">
              <span className="icon">
              <FaStore />
              </span>
              <span className="title">Market</span>
            </Link>
          </li>

          

        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
