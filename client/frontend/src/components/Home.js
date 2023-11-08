import React from 'react';
import '../assets/css/landingPage.css';
import { Link } from 'react-router-dom';


function LandingPage() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><a href="#intro">Intro</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#login">Login</a></li>
                        <li><a href="#signup">Signup</a></li>
                    </ul>
                </nav>
            </header>

            <section id="intro">
                <div className="cover-image">
                    
                </div>
                <h1>PedalPro</h1>
                <p>Your Cycling Community!pedal your way to fun and fitness.</p>
                <Link to="/login" className="btn">Visit Project</Link>
            </section>

            <section id="features">
                <div className="feature">
                    <img src="../assets/images/feature_login.png" alt="Feature 1" />
                    <h2>User Authentication</h2>
                    <br />
                    <br />
                    <p>The User Authentication feature in the "PedalPro" app is designed to provide
                        a secure and personalized experience for cyclists.<br /> It allows users to create
                        and manage their accounts, log in, and access various functionalities tailored
                        to their preferences and needs.<br />
                        <br />
                        The Login component provides existing users with a secure way to access their
                        accounts. Users can enter their credentials (e.g., username or email and password)
                        to log in. <br /> Logging in allows users to access their profile, track their cycling
                        activities, connect with other cyclists, and use personalized features.<br />
                        <br />
                        The Signup component allows new users to create their "PedalPro" accounts.
                        Users provide necessary information and set up their profiles.<br /> Registration is the
                        first step for users to become part of the "PedalPro" community. It enables them to
                        connect with other cyclists, log their rides, and receive personalized recommendations.</p>
                </div>
                <div className="feature">
                    <img src="feature2.jpg" alt="Feature 2" />
                    <h2>Ride</h2>
                    <p>
                        <span className='h3'>Create Ride</span><br />
                        <br />
                        The "Create Ride" feature in the "PedalPro" app empowers cyclists to plan and organize
                        their cycling adventures. Whether it's a solo ride, a group ride, or an event, users can
                        create, customize, and share their rides with the community.<br />
                        <br />
                        <span className='h3'>Join Ride</span><br />
                        The "Join Ride" feature in the "PedalPro" app enables cyclists to discover and participate
                        in rides organized by others. Users can browse available rides, and join fellow riders
                        for a shared cycling experience.<br />
                        <br />
                        <span className='h3'>View Ride</span><br />
                        The "View Ride" feature in the "PedalPro" app offers users a comprehensive overview of a
                        specific ride. Cyclists can access ride details, and participant information.
                    </p>
                </div>
                
            </section>

            <section id="about">
                <h2>About</h2>
                <br />
                <p>"As a passionate cyclist and a software developer, my journey with PedalPro began with the
                    love for both cycling and technology. Every time I hopped on my bike and hit the road, I
                    couldn't help but think about how technology could enhance the cycling experience. The idea
                    for PedalPro was born from my own cycling adventures, whether it was exploring new trails,
                    tracking my performance, or connecting with fellow cyclists.<br />
                    <br />
                    PedalPro is my way of bringing the cycling community together and providing a platform where
                    cyclists can connect, share their experiences, and discover new routes. It's a project that's
                    close to my heart, and I'm excited to share it with fellow cyclists.<br />

                    PedalPro is also a part of my journey at <a href='https://www.alxafrica.com/' target="_blank"
                    rel="noopener noreferrer">Holberton School</a>, where I had the opportunity to apply
                    my programming skills to real-world projects. To explore more of my educational and personal
                    projects and also collaboration, please visit my Github profile with the link below.<br />
                    <br />
                    Join me in making PedalPro a valuable resource for the cycling community, and let's pedal together
                    toward new horizons!"

                    </p>
                <div className="team-links">
                    <a href="https://www.linkedin.com/in/wamoni-kiai-3217a5234/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/stephenkiai" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://twitter.com/Wamoni_kiai" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <a className="github-link" href="https://github.com/stephenkiai/pedalpro_v1" target="_blank" rel="noopener noreferrer">My GitHub Repository</a>
            </section>

            <section id="signup">
                <h2>Signup</h2>

                <Link to="/register">Click Here To Become a <strong>PedalPro</strong> Member!!</Link><br />
                <p>We do not share your Personal data with third parties!!</p>
                
            </section>

            <section id="login">
                <h2>Login</h2>
                <Link to="/login">SignIn To <strong>PedalPro</strong>!!</Link><br />
                <p>By signing In to <strong>PedalPro</strong>, You accept our Terms and Conditions.</p>
                
            </section>
        </div>
    );
}

export default LandingPage;
