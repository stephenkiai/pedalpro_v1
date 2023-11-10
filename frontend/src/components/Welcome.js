import React from 'react'
import '../assets/css/welcome.css';
import { Container, Row, Col } from 'react-bootstrap';
import TopBar from './TopBar';
import SideNav from './SideNav';

const Welcome = () => {
        return (
          <>
          <TopBar />
            <SideNav />
            <Container fluid className="welcome-container">
              <Row className="justify-content-center align-items-center h-100">
                <Col xs={12} sm={8} md={6} lg={4}>
                  <div className="welcome-content">
                    <h1>"Welcome To PedalPro"</h1>
                    <p>
                      "Your Cycling Community!<br /><br />
                      Discover the ultimate hub for cycling enthusiasts, PedalPro! Get ready to embark on
                      a thrilling journey through scenic routes, join fellow cyclists on exciting rides,
                      and take your passion for cycling to the next level. We are here to bring cyclists
                      together, whether you're a beginner, a seasoned pro, or just looking for a new adventure.<br /><br />
                      Plan your rides, connect with like-minded cyclists, track your performance, and have
                      a blast while you pedal your way to fun and fitness. At PedalPro, the road is yours,
                      and the possibilities are endless.<br /><br />
                      PedalPro is more than just a cycling platform; we're a vibrant community of cycling
                      enthusiasts who share a common love for two wheels and the open road. Our journey began
                      with a passion for cycling and a vision to unite cyclists from all walks of life.<br /><br />
                      At PedalPro, we believe in the power of cycling to transform lives, enhance fitness,
                      and foster connections. Our mission is to provide a platform where cyclists of all levels
                      can meet, share experiences, and explore the world on two wheels."
                    </p>
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        );
      };
      
export default Welcome;
