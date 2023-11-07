import React from 'react'
import SideNav2 from './SideNav2'
import TopBar from './TopBar';
import '../assets/css/home.css';
import LoginForm from './LoginForm';


const Home = () => {
  return (
    <div className='cards'>
        <TopBar />
        <SideNav2 />
        <LoginForm />
        
    </div>
  )
}

export default Home
