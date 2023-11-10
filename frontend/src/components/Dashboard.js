import React from 'react'
import SideNav from './SideNav.js';
import TopBar from './TopBar.js';
import Welcome from './Welcome.js';


const Dashboard = () => {
  return (
    <div className='dashboard'>
        <TopBar />
        <SideNav />
        <Welcome />
        
    </div>
  )
}

export default Dashboard
