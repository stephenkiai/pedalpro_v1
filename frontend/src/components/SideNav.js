import React from 'react';
import { FaUsers, FaComment, FaQuestionCircle,
    FaStore, FaRoute, FaBicycle } from 'react-icons/fa';
import '../assets/css/sidenav.css'
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
          <h2 className="dashboard-text">Dashboard</h2>

          <li>
          <Link to="/createRide">
              <span className="icon">
              <FaRoute />
              </span>
              <span className="title">Create Ride</span>
            </Link>
          </li>

          <li>
          <Link to="/rideList">
              <span className="icon">
              <FaUsers />
              </span>
              <span className="title">Ride List</span>
            </Link>
          </li>

          <li>
          <Link to="/liveRide">
              <span className="icon">
              <FaQuestionCircle />
              </span>
              <span className="title">Live Ride</span>
            </Link>
          </li>

          <li>
          <Link to="/joinedRide">
              <span className="icon">
              <FaBicycle />
              </span>
              <span className="title">My Rides</span>
            </Link>
          </li>

          <li>
          <Link to="/myBike">
              <span className="icon">
              <FaBicycle />
              </span>
              <span className="title">My Bike Profile</span>
            </Link>
          </li>

          <li>
          <Link to="/buddy">
              <span className="icon">
              <FaUsers />
              </span>
              <span className="title">Friends</span>
            </Link>
          </li>

          <li>
          <Link to="/messages">
              <span className="icon">
              <FaComment />
              </span>
              <span className="title">Messages</span>
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
