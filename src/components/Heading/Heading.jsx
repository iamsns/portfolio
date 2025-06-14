import { Button, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Heading = () => {
    return (
        <Navbar sticky="top" bg="dark" data-bs-theme="dark" expand="lg"  className="custom_navbar py-3 px-2 text-white">
            <Navbar.Brand className="ms-3 fs-2 fw-bold">
                SHIV
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end me-3">
                <div className="d-flex align-items-center">
                    <Nav className="me-5">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#about">ABOUT ME</Nav.Link>
                        <Nav.Link href="#projects">PROJECTS</Nav.Link>
                        <Nav.Link href="#contact">CONTACTS</Nav.Link>
                    <Button href="#contact" variant="primary" size="lg" className=" rounded-pill">LET'S TALK</Button>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Heading;
