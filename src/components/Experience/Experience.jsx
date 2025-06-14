import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const experiences = [
    {
        role: "Software Engineer II",
        company: "CODEVYASA | NOIDA",
        client: "CREDABLE",
        duration: "MAR 2023 - APR 2025",
        type: "FULL TIME",
        description: [
            "Developed multiple modules with maker-checker functionality for Admin, Corporate, and Distributor portals, improving operational efficiency by 25%",
            "Designed and developed a dynamic form system for bank configuration within the DFX fintech platform",
            "Implemented MLE encryption & decryption using Subtle Crypto Library, securing 100% of API requests/responses across multiple clients.",
        ],
    },
    {
        role: "Software Engineer I",
        company: "CODEVYASA | GURGAON",
        client: "HONASA CONSUMER LTD.",
        duration: "JUL 2022 - FEB 2023",
        type: "FULL TIME",
        description:
            ["Improved performance by modularizing components, using React.lazy for code-splitting, and optimizing with pure components—boosting load speed by 20% and cutting memory use by 30%.",
                "Implemented dynamic theming and font management in Aqualogica to support white-label customization and brand consistency",
                "Integrated third-party services (Razorpay, IDfy, Digio, e-NACH) for payment processing, e-signatures, and digital verification, enhancing platform capabilities"
            ],
    },
    {
        role: "Web Developer",
        company: "CONJOINIX TOTAL SOLUTION | CHANDIGARH",
        client: null,
        duration: "SEP 2021 - JUL 2022",
        type: "FULL TIME",
        description:
            ["Developed a real-time tracking system for commercial vehicles, enabling government authorities to monitor fleet movement and compliance using GPS and geofencing.",
                "Built an analytics dashboard with trip history, stoppage reports, and fuel efficiency insights to support regulatory audits and decision-making.",
                "Built a centralized system to manage SIM lifecycle—from lot assignment to activation—improving traceability and reducing manual overhead.",
            ],
    }
];

const Experience = () => {
    return (
        <div className="experience_section" style={{ minHeight: "100vh", background: 'linear-gradient(90deg, #000407 0%, #0c2a48 100%)', color: "white", padding: "4rem 0" }}>
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
                            <Col sm={5} md={3} className="p-4" style={{ backgroundColor: "#0d6efd", borderRadius: "0.5rem" }}>
                                <h4 className="fw-bold">{exp.role}</h4>
                                <p className="mb-1">{exp.company}</p>
                                {exp.client && <p className="mb-1">Client: {exp.client}</p>}
                                <p className="mb-2">{exp.duration}</p>
                                <Badge bg="light" text="dark" className="fw-semibold px-3 py-2 rounded-pill">
                                    {exp.type}
                                </Badge>
                            </Col>
                            <Col sm={7} md={9} className="p-4">
                                <p className="text-light">{
                                    exp.description.map((content, index) => {
                                        return <li key={index}>{content}</li>
                                    })
                                }</p>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </Container>
        </div>
    );
};

export default Experience;
