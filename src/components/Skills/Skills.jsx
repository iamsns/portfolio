import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaAws,
    FaBootstrap,
    FaGithub,
} from 'react-icons/fa';
import {
    SiExpress,
    SiNextdotjs,
    SiMongodb,
    SiTypescript,
    SiRedux,
    SiMongoose,
    SiVercel,
} from 'react-icons/si';
import { TbTopologyStar } from 'react-icons/tb';
import { MdApi } from 'react-icons/md';

import { Badge, Container } from 'react-bootstrap';
import './skills.css';

const Skills = () => {
    const skills = [
        { name: "HTML", icon: <FaHtml5 color="#e34c26" size={60} /> },
        { name: "CSS", icon: <FaCss3Alt color="#264de4" size={60} /> },
        { name: "JavaScript", icon: <FaJs color="#f0db4f" size={60} /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178c6" size={60} /> },
        { name: "React", icon: <FaReact color="#61DBFB" size={60} /> },
        { name: "Redux", icon: <SiRedux color="#764abc" size={60} /> },
        { name: "Next.js", icon: <SiNextdotjs color="#ffffff" size={60} /> },
        { name: "Node.js", icon: <FaNodeJs color="#3c873a" size={60} /> },
        { name: "Express", icon: <SiExpress color="#ffffff" size={60} /> },
        { name: "MongoDB", icon: <SiMongodb color="#4DB33D" size={60} /> },
        { name: "Mongoose", icon: <SiMongoose color="#800000" size={60} /> },
        { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" size={60} /> },
        { name: "Git", icon: <FaGitAlt color="#F1502F" size={60} /> },
        { name: "GitHub", icon: <FaGithub color="#ffffff" size={60} /> },
        { name: "REST API", icon: <MdApi color="#4DB6AC" size={60} /> },
        { name: "Vercel", icon: <SiVercel color="#ffffff" size={60} /> },
        { name: "AWS", icon: <FaAws color="#FF9900" size={60} /> },
        { name: "Microservices", icon: <TbTopologyStar color="#00bcd4" size={60} /> },
    ];



    return (
        <section className='project-section'>
            <Container>
                <Badge className="mb-3 px-3 py-2 custom-badge">
                    My Skills
                </Badge>
                <h6 className="fw-bold mb-4">Technologies I work with</h6>
                <Container className="py-4">

                    <div className="skills-grid">
                        {skills.map((tech, index) => (
                            <div
                                key={index}
                                className="skill-item"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="skill-icon-wrapper mb-2">
                                    <p>{tech.icon}</p>
                                    <p className="text-white text-center fw-semibold m-0 small">
                                        {tech.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Container>
        </section>
    );
};

export default Skills;