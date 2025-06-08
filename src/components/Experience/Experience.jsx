import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const experiences = [
    {
        role: "Software Engineer II",
        company: "CODEVYASA | NOIDA",
        client: "CREDABLE",
        duration: "MAR 2023 - APR 2025",
        type: "FULL TIME",
        description:
            "CredAble is a fintech company that provides business loans based on invoices generate by corporate. It offers fast, transparent, and flexible working capital solutions, helping businesses access funds quickly, improve cash flow management, and support their growth effectively.",
    },
    {
        role: "Software Engineer I",
        company: "CODEVYASA | GURGAON",
        client: "HONASA CONSUMER LTD.",
        duration: "JUL 2022 - FEB 2023",
        type: "FULL TIME",
        description:
            "Honasa Consumer Ltd. is a leading Indian digital-first beauty and personal care company. Its flagship brand, Mamaearth, offers toxin-free products for babies and adults. The company also owns Aqualogica, a hydration-focused skincare brand, delivering effective and sustainable solutions for healthy skin.",
    },
    {
        role: "Web Developer",
        company: "CONJOINIX TOTAL SOLUTION | CHANDIGARH",
        client:null,
        duration: "SEP 2021 - JUL 2022",
        type: "FULL TIME",
        description:
            "Conjoinix Total Solutions is a Chandigarh-based company specializing in GPS vehicle tracking. Their advanced system offers real-time location tracking, route playback, fleet safety features, and seamless integration to improve vehicle monitoring and security.",
    }
];

const Experience = () => {
    return (
        <div style={{ minHeight: "100vh", background: 'linear-gradient(90deg, #000407 0%, #0c2a48 100%)', color: "white", padding: "4rem 0" }}>
            <Container>
                <Badge className="mb-3 px-3 py-2 custom-badge">
                    EXPERIENCE
                </Badge>
                <h2 className="fw-bold mb-5">
                    MY WORK <span className="text-primary">EXPERIENCE</span>
                </h2>

                {experiences.map((exp, idx) => (
                    <Card
                        key={idx}
                        className="mb-4"
                        style={{ backgroundColor: "#132037", border: "none" }}
                    >
                        <Row className="g-0">
                            <Col md={4} className="p-4" style={{ backgroundColor: "#0d6efd", borderRadius: "0.5rem" }}>
                                <h4 className="fw-bold">{exp.role}</h4>
                                <p className="mb-1">{exp.company}</p>
                                {exp.client && <p className="mb-1">Client: {exp.client}</p>}
                                <p className="mb-2">{exp.duration}</p>
                                <Badge bg="light" text="dark" className="fw-semibold px-3 py-2 rounded-pill">
                                    {exp.type}
                                </Badge>
                            </Col>
                            <Col md={8} className="p-4">
                                <h5 className="fs-2 fw-bold text-white">About Company</h5>
                                <p className="text-light">{exp.description}</p>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </Container>
        </div>
    );
};

export default Experience;
