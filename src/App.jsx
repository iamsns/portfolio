import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";


import Heading from "./components/Heading/Heading";
import About from "./components/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

const App = () => {
    return (
        <>
            <Heading />
            <section id="home">
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>

            <section id="experience">
                <Experience />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </>
    )
}

export default App;