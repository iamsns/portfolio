import React from 'react';
import { Badge, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './projects.css'

const projects = [
    {
        image: "/project1.jpg",
        title: "Website Design",
        tags: "Web Design, App Design",
    },
    {
        image: "/project2.jpg",
        title: "Website Design",
        tags: "Web Design, App Design",
    },
    {
        image: "/project3.jpg",
        title: "Website Design",
        tags: "Web Design, App Design",
    },
    {
        image: "/project4.jpg",
        title: "Website Design",
        tags: "Web Design, App Design",
    },
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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
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
        <section  className='project-section'>
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
                                    display: 'flex'
                                }}
                            >
                                <div style={{ position: 'relative' }}>
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            backgroundColor: '#fff',
                                            borderRadius: '50%',
                                            width: '40px',
                                            height: '40px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontSize: '20px',
                                        }}
                                    >
                                        +
                                    </div>
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
