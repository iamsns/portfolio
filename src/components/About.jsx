import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
// import './About.css'; // Optional CSS file for any custom styles

const About = () => {
    return (
        <div
            className="d-flex align-items-center"
            style={{
                background: 'linear-gradient(90deg, #000407 0%, #0c2a48 100%)',
                color: 'white',
                height: '100vh',
            }}
        >
            <Container>
                <Row className="align-items-center flex-column-reverse flex-md-row text-center text-md-start">

                    {/* Image Section */}
                    <Col md={5} className="mb-4 mb-md-0">
                        <Card className="bg-transparent border-0 text-center">
                            <Card.Img
                                src="self.png" // Replace with actual image
                                alt="Profile"
                                className="rounded-4 img-fluid"
                                style={{ maxHeight: '450px', objectFit: 'cover' }}
                            />
                        </Card>
                    </Col>
                    {/* Text Section */}
                    <Col md={7}>
                        <Badge className="mb-3 px-3 py-2 custom-badge">
                            ABOUT ME
                        </Badge>
                        <h2 className="fw-bold mb-3">
                            I AM AVAILABLE FOR <span style={{ color: '#1E90FF' }}>FRONTEND BACKEND</span> DEVELOPMENT
                        </h2>
                        <p className="text-light" style={{ opacity: 0.8 }}>
                           I’m open to taking on frontend and backend development projects where clean code, performance, and user experience matter. On the frontend, I can build responsive interfaces with React and modern UI libraries. On the backend, I design scalable APIs, handle data modeling, and integrate with databases like MongoDB. I enjoy working on feature-rich dashboards, admin panels, and systems that require end-to-end problem-solving. Whether you need help with an existing product or building something from scratch, I bring a balanced focus on quality, collaboration, and delivery.
                        </p>

                        <Row className="text-center text-md-start mt-4">
                            <Col xs={4} className='about_details me-2'>
                                <h3>3.6+</h3>
                                <p className="text-light" style={{ opacity: 0.7 }}>Years Experience</p>
                            </Col>
                            <Col xs={4} className='about_details'>
                                <h4>8+</h4>
                                <p className="text-light" style={{ opacity: 0.7 }}>Projects</p>
                            </Col>
                        </Row>

                        <div className="mt-4">
                            <Button href="#contact" variant="primary" className="px-4 py-2">
                                GET IN TOUCH →
                            </Button>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default About;
