import React from 'react'
import SideNav2 from './SideNav2'
import TopBar from './TopBar';
import '../assets/css/home.css';


const Home = () => {
  return (
    <div className='cards'>
        <TopBar />
        <SideNav2 />
        <div className="cardBox">
                <div className="card1">
                    <div>
                        <div className="welcome">WelcomeTo PedalPro</div>
                            <div className="cardName">
                                <p>
                                "<span className="bold">Your Cycling Community!</span>

                                Discover the ultimate hub for cycling enthusiasts, PedalPro! Get
                                ready to embark on a thrilling journey through scenic routes, join
                                fellow cyclists on exciting rides, and take your passion for cycling
                                to the next level. We are here to bring cyclists together, whether you're
                                a beginner, a seasoned pro, or just looking for a new adventure.<br />

                                <span className="italic">Plan your rides, connect with like-minded cyclists, track your performance, and have
                                a blast while you pedal your way to fun and fitness. At PedalPro, the road
                                is yours, and the possibilities are endless.</span>
                                </p>
                            </div>
                        <div className="welcome">About Us</div>
                            <div className="cardName">
                                <p>
                                "<span className="bold">PedalPro</span> is more than just a cycling platform; we're a vibrant community of
                                cycling enthusiasts who share a common love for two wheels and the open road.
                                Our journey began with a passion for cycling and a vision to unite cyclists from
                                all walks of life.<br />

                                At <span className="bold">PedalPro</span>, we believe in the power of cycling to transform lives, enhance fitness,
                                and foster connections. <span className="italic">Our mission is to provide a platform where cyclists of all levels
                                can meet, share experiences, and explore the world on two wheels.</span>
                                </p>
                            </div>

                            <div className="welcome">What We Offer</div>
                        <div className="cardName">
                            <p>

                            <span className="bold">Community:</span> PedalPro is where the cycling community comes together. Connect with
                            cyclists from around the world, make new friends, and be a part of a global cycling network.<br />

                            <span className="bold">Rides:</span> Plan, join, and create rides in your area or in your dream destinations.
                            Explore new routes, challenge yourself, and make memories on the road.<br />

                            <span className="bold">Tracking:</span> Keep an eye on your performance with detailed ride tracking features.
                            Monitor your speed, distance, and other metrics to improve your cycling experience.<br />

                            <span className="bold">Safety:</span> We prioritize your safety on the road. Access resources, guidelines, and
                            connect with fellow riders to ensure every journey is a safe one.<br />

                            <span className="bold">Fun:</span> At PedalPro, it's not just about the ride; it's about having fun. Share stories,
                            post photos, and enjoy the cycling lifestyle to the fullest.<br />
                            </p>
                        </div>
                            
                    </div>

                    
                </div>


                <div className="card2">
                    <div>
                        <div className="about">Our Team</div>
                        <div className="cardName">
                            <p>
                            Our team at <span className="bold">PedalPro</span> is made up of passionate cyclists who understand the thrill of
                            the open road and the camaraderie of the cycling community. We're here to make your
                            cycling adventures as exciting and memorable as possible.

                            Join us today and become a part of our ever-growing PedalPro family. <span className="italic">Let's pedal
                            together towards a healthier, happier, and more connected world!"</span>
                            </p>
                        </div>
                    </div>

                    
                </div>
            </div>
    </div>
  )
}

export default Home
