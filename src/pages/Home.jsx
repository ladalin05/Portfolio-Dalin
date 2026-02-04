
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import { Experience } from "../sections/Experience";
import { Contact } from "../sections/Contact";
import { Skills } from "../sections/Skill";
import '../assets/css/global.css';
import '../assets/css/custom.css';
import '../assets/css/layout.css'

function HomePage() {
  return (
      <>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience /> 
        <Contact />
      </>
  );
}

export default HomePage;
