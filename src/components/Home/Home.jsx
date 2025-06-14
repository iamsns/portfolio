import React from 'react';
import { Container, Row, Col, Button, Badge, Image } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';
import './home.css';
import TypingEffect from '../TypingEffect/TypingEffect';
import DotAnimation from './DotAnimation';

const Home = () => {
    return (
        <div className="home-section text-white d-flex align-items-center">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <Badge className="mb-3 px-3 py-2 custom-badge">
                            SHIV SHARMA
                        </Badge>
                        <h1 className="display-4 fw-bold">HEY! I'M SHIV</h1>
                        <TypingEffect />
                        <p className=" mt-4">
                            I’m a MERN Stack Developer with 3.5+ years of experience building fast, scalable, and maintainable web applications. I specialize in Node.js, React, and MongoDB, and enjoy solving real-world problems with clean architecture, secure APIs, and intuitive UIs.
                        </p>
                        <div className="d-flex gap-3 mt-4 align-items-center">
                            <Badge variant="primary" className="py-3 px-4 f-5 rounded-pill">
                                GET IN TOUCH →
                            </Badge>
                            <a href="https://www.linkedin.com/in/shiv-b9f61/" target='_blank'><FaLinkedin className="social-icon" /></a>
                        </div>
                    </Col>

                    <Col
                        md={6}
                        className="pt-4 pt-md-0 d-flex justify-content-center align-items-center dot-animation-wrapper"
                    >
                        <DotAnimation />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
