import React from 'react'
import '../assets/css/aboutUs.css';
import { Container, Row, Col } from 'react-bootstrap';
import TopBar from './TopBar';
import SideNav from './SideNav';

const AboutUs = () => {
        return (
          <>
          <TopBar />
            <SideNav />
            <Container fluid className="about-us-container">
              <Row className="justify-content-center align-items-center h-100">
                <Col xs={12} sm={8} md={6} lg={4}>
                  <div className="about-us-content">
                    <h1>About Us</h1>
                    <p>
                      "Your Cycling Community!<br /><br />
                      Discover the ultimate hub for cycling enthusiasts, PedalPro! Get ready to embark on a thrilling journey through scenic routes, join fellow cyclists on exciting rides, and take your passion for cycling to the next level. We are here to bring cyclists together, whether you're a beginner, a seasoned pro, or just looking for a new adventure.<br /><br />
                      Plan your rides, connect with like-minded cyclists, track your performance, and have a blast while you pedal your way to fun and fitness. At PedalPro, the road is yours, and the possibilities are endless.<br /><br />
                      PedalPro is more than just a cycling platform; we're a vibrant community of cycling enthusiasts who share a common love for two wheels and the open road. Our journey began with a passion for cycling and a vision to unite cyclists from all walks of life.<br /><br />
                      At PedalPro, we believe in the power of cycling to transform lives, enhance fitness, and foster connections. Our mission is to provide a platform where cyclists of all levels can meet, share experiences, and explore the world on two wheels."
                    </p>
                    <h2>What We Offer</h2>
                    <ul className="what-we-offer-list">
                      <li><span class="bold">Community:</span> PedalPro is where the cycling community comes together. Connect with cyclists from around the world, make new friends, and be a part of a global cycling network.</li>
                      <li><span class="bold">Rides:</span> Plan, join, and create rides in your area or in your dream destinations. Explore new routes, challenge yourself, and make memories on the road.</li>
                      <li><span class="bold">Tracking:</span> Keep an eye on your performance with detailed ride tracking features. Monitor your speed, distance, and other metrics to improve your cycling experience.</li>
                      <li><span class="bold">Safety:</span> We prioritize your safety on the road. Access resources, guidelines, and connect with fellow riders to ensure every journey is a safe one.</li>
                      <li><span class="bold">Fun:</span> At PedalPro, it's not just about the ride; it's about having fun. Share stories, post photos, and enjoy the cycling lifestyle to the fullest.</li>
                    </ul>
                    <h2>Our Team</h2>
                    <p>
                      Our team at PedalPro is made up of passionate cyclists who understand the thrill of the open road and the camaraderie of the cycling community. We're here to make your cycling adventures as exciting and memorable as possible.<br /><br />
                      Join us today and become a part of our ever-growing PedalPro family. Let's pedal together towards a healthier, happier, and more connected world!"
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        );
      };
      
export default AboutUs;
