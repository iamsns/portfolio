import React, { useRef } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import emailjs from 'emailjs-com'
const Contact = () => {
    const formRef = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_EMAIL_PUBLIC_KEY
        ).then(
            (result) => {
                console.log(result)
                if (result.status == 200) {
                    formRef.current.reset();
                    alert('Message sent successfully!');
                }
            },
            (error) => {
                alert('Failed to send message. Please try again.');
            }
        )
    };


    return (
        <div
            style={{
                background: "linear-gradient(90deg, #0c2a48 0%, #000407 100%)",
                padding: "4rem 0",
                color: "#fff",
            }}
        >
            <Container>
                <div
                    style={{
                        background: "#0f3b5c",
                        borderRadius: "10px",
                        padding: "3rem 2rem",
                    }}
                >
                    <Row className="">
                        <Col md={4} className="mb-md-0">
                            <div
                                style={{
                                    width:"350px",
                                    backgroundColor: "#092f4a",
                                    borderRadius: "10px",
                                    textAlign: "center",
                                    backgroundImage: 'url(bg.jpg)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <Image
                                    src="self.png"
                                    rounded
                                    fluid
                                    style={{
                                        width: "300px",
                                        height: "300px",
                                        objectFit: "cover",
                                        borderRadius: "20px",
                                    }}
                                />


                            </div>
                            <div>
                                <p
                                    className="text-uppercase"
                                    style={{ fontSize: "0.75rem", marginTop: '20px', marginBottom: "0.2rem" }}
                                >
                                    Write an E-mail
                                </p>
                                <h5 className="fw-bold mb-4">shivn4128@gmail.com</h5>

                                <p
                                    className="text-uppercase"
                                    style={{ fontSize: "0.75rem", marginBottom: "0.2rem" }}
                                >
                                    Call Me
                                </p>
                                <h5 className="fw-bold mb-4">+91 8385871449</h5>
                            </div>
                        </Col>

                        <Col md={8}>
                            <h2 className="fw-bold mb-3">Let’s Discuss Further</h2>
                            <p className="mb-4" style={{ color: "#d1d1d1", fontSize: "1rem" }}>
                                Feel free to contact me.
                            </p>

                            <Form ref={formRef} onSubmit={sendEmail}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-uppercase" style={labelStyle}>Your Name</Form.Label>
                                            <Form.Control

                                                name="name"
                                                type="text"
                                                placeholder="Name *"
                                                style={inputStyle}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-uppercase" style={labelStyle}>Your Email</Form.Label>
                                            <Form.Control

                                                name="email"
                                                type="email"
                                                placeholder="Email *"
                                                style={inputStyle}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label className="text-uppercase" style={labelStyle}>Subject</Form.Label>
                                    <Form.Control
                                        name="subject"
                                        type="text"
                                        placeholder="Subject *"
                                        style={inputStyle}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="text-uppercase" style={labelStyle}>Your Message</Form.Label>
                                    <Form.Control
                                        name="message"
                                        as="textarea"
                                        rows={5}
                                        placeholder="Your message *"
                                        style={inputStyle}
                                    />
                                </Form.Group>

                                <Button
                                    type="submit"
                                    className="w-100 fw-bold"
                                    style={{
                                        backgroundColor: "#0d6efd",
                                        border: "none",
                                        borderRadius: "50px",
                                        padding: "0.75rem",
                                        fontSize: "1rem",
                                    }}
                                >
                                    SEND MESSAGE
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

const inputStyle = {
    backgroundColor: "#0c2a48",
    border: "1px solid #1d4b6c",
    color: "#fff",
    padding: '10px',
    borderRadius: "10px",
};

const labelStyle = {
    fontSize: "0.75rem",
    color: "#ccc",
};

export default Contact;
