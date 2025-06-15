import { Button, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDownload } from 'react-icons/fa';

const Heading = () => {
    return (
        <Navbar sticky="top" bg="dark" data-bs-theme="dark" expand="md" className="custom_navbar py-3 px-2 text-white">
            <Navbar.Brand className="ms-3 fs-2 fw-bold">
                SHIV
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end me-3">
                <div className="d-flex align-items-center">
                    <Nav className="me-5 align-items-center">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#about">ABOUT ME</Nav.Link>
                        <Nav.Link href="#projects">PROJECTS</Nav.Link>
                        <Nav.Link href="#contact">CONTACTS</Nav.Link>
                        <a href="/ShivNarayanSharma_Resume.pdf" download target='_blank'><Button variant="primary" className="px-4 py-2 ms-3 hover_effect cursor-pointer" >
                            Resume
                            <FaDownload className="social-icon text-white ms-1" style={{ fontSize: "14px" }} />
                        </Button></a>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Heading;
