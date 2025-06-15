import { useEffect, useState } from 'react';
import { Badge, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectDetails from './ProjectDetails';

const projects = [
    {
        image: "/images/aqualogica.png",
        title: "Aqualogica",
        tags: "E-commerce, Skincare, Product Catalog",
        description: [
            'Aqualogica is a white-label web platform designed to support multiple skincare and wellness brands under a unified, customizable framework. The application enables dynamic theming, font management, and brand-specific configurations, allowing each partner brand to offer a distinct visual identity while maintaining a consistent user experience. The system supports multilingual content, product catalog management, and promotional campaign features tailored to individual brand needs.',

            'Built with scalability and performance in mind, the platform uses a modular architecture to streamline onboarding of new partners with minimal code duplication. Integrated with secure authentication, payment gateways, and CMS systems, Aqualogica ensures smooth content updates, fast load times, and reliable transaction handling across devices. The system significantly reduces time-to-market for brand rollouts while maintaining centralized control over platform enhancements and user analytics.'
        ],
        client: null,
        domain: "E-commerce",
        languages: "Javscript, Typescript",
        techStack: "React.js, Next.js, Node.js, Express.js, MongodDB, Redux, Bootstrap",
        role: "Full Stack Developer",
        link: "https://aqualogica.in/"
    },
    {
        image: "/images/vahansuraksha.png",
        title: "Vahan Suraksha",
        tags: "Vehicle Tracking System, AIS-140 Platform",
        description: ["The Vehicle Tracking System is a government-backed platform built to monitor commercial vehicles operating across various regions. Each vehicle is equipped with a GPS device that transmits real-time location, speed, and route data to a centralized server. This data is visualized through a web-based dashboard that provides features such as live tracking, geofence monitoring, trip playback, and stoppage detection. The system also generates detailed reports to support regulatory enforcement and policy decision-making.", "Designed with scalability and security in mind, the platform supports thousands of active vehicles and multiple user roles. Transport authorities, fleet operators, and regional administrators are granted role-specific access to ensure data integrity and operational control. Integrated with transport databases and alert mechanisms, the system enhances road safety, ensures compliance with movement regulations, and reduces the need for manual fleet audits."],
        client: 'Government',
        domain: null,
        languages: "Javscript, Typescript",
        techStack: "React.js, Next.js, Node.js, Express.js, MongodDB, Bootstrap",
        role: "Full Stack Developer",
        link: "https://vahansuraksha.com/"

    },
    {
        image: "/images/rklibrary.png",
        title: "Rk Library",
        tags: "EdTech, Library Management, Book Inventory",
        description: ["Rk Library is a web-based library management system inspired by the manual, paper-based process used in my college library. The goal was to digitize the entire book issue workflow for students and administrators. Students can browse available books, submit issue requests online, and track the status of their requests through a clean, intuitive interface—eliminating the need for physical forms and in-person queues.", "The admin panel allows library staff to manage book inventories, review and approve issue requests, and organize book lots efficiently.This system streamlines day - to - day operations, improves transparency, and reduces human error.By transforming a fully offline process into a digital platform, Rk Library offers a practical and scalable solution for modernizing traditional library systems."],
        client: null,
        domain: "Edtech",
        languages: "Javscript",
        techStack: "React.js, Next.js, Node.js, Express.js, MongodDB, Redux,Bootstrap, styled-component",
        role: "Full Stack Developer",
        link: "https://rklibrary-client.vercel.app/"
    },
    {
        image: "/images/portfolio.png",
        title: "Portfolio",
        tags: "Personal Branding, Project Showcase",
        description: ['This portfolio website is a frontend-only project built using React, designed to showcase my professional experience, technical skills, and featured projects. It includes a clean, responsive layout with modular sections like About, Projects, Skills, and Contact, offering visitors a smooth and structured way to explore my work across all device sizes.',
            `The site is deployed on Vercel and built for performance, maintainability, and scalability. Though it's currently a static frontend application, it is structured to support future enhancements such as blog integration, contact form handling, or CMS-backed project data—making it a flexible platform for continuous personal branding.`],
        client: null,
        domain: "Personal Branding",
        languages: "Javscript",
        techStack: "React.js, Bootstrap",
        role: "Frontend Developer | React Developer",
        link: "https://portfolio-liard-eight-79.vercel.app/"
    },
    {
        image: "/images/drumkit.png",
        title: "Drum Kit",
        tags: "Mini Project, Sound Effects",
        description: ['This is a fun, single-page web application built just for experimentation and creativity. It features four drum elements and a few other interactive instruments that produce rhythmic sounds when clicked or triggered through specific keyboard keys. Users can combine them to create simple, music-like sequences directly in the browser.', 'The project focuses on real-time sound interaction, keyboard event handling, and engaging UI behavior. Though simple in structure, it showcases how basic frontend technologies can be used to build playful, interactive experiences without relying on any backend logic.'],
        client: null,
        domain: "Mini Project, Sound Effects",
        languages: "Javascript",
        techStack: "HTML5, CSS3",
        role: "Frontend Developer",
        link: "https://iamsns.github.io/drumkit.github.io/"
    }
];

const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow next" onClick={onClick}>
        <FaArrowRight />
    </div>
);

const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
        <FaArrowLeft />
    </div>
);

const Projects = () => {

    const [show, setShow] = useState(false);
    const [projectDetails, setProjectDetails] = useState(null)
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
    }, [show]);
    const showDetails = (proj) => {
        setProjectDetails(proj)
        setShow(true)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        customPaging: (i) => <button>{i + 1}</button>,
        appendDots: (dots) => {
            const maxDots = 5;
            const totalDots = dots.length;

            if (totalDots <= maxDots) {
                return <ul>{dots}</ul>;
            }

            const currentIndex = dots.findIndex((dot) =>
                dot.props.className.includes('slick-active')
            );

            let start = Math.max(0, currentIndex - Math.floor(maxDots / 2));
            if (start + maxDots > totalDots) {
                start = totalDots - maxDots;
            }

            const visibleDots = dots.slice(start, start + maxDots);
            return <ul>{visibleDots}</ul>;
        },
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };


    return (
        <section className='project-section'>
            <ProjectDetails show={show} handleClose={() => setShow(false)} project={projectDetails} />
            <Container>
                <Badge className="mb-3 px-3 py-2 custom-badge">
                    MY WORK
                </Badge>
                <h2 className="fw-bold mb-4">Recent Project</h2>

                <Slider {...settings}>
                    {projects.map((proj, index) => (
                        <div key={index} className="px-2">
                            <div
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    color: '#000',
                                    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                                    padding: '10px',
                                    cursor: "pointer"
                                }}
                                className='project-container'
                                onClick={() => showDetails(proj)}
                            >
                                <div style={{ position: 'relative' }}>
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '10px' }}
                                    />
                                </div>
                                <div className="p-3">
                                    <h5 className="mb-1">{proj.title}</h5>
                                    <p className="text-muted mb-0">{proj.tags}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </section>
    );
};

export default Projects;