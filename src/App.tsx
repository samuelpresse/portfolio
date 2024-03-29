import "./App.css";
import information from "./content/Information";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsAndTools from "./components/SkillsAndTools";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <div className="background-img">
        <Navbar
          firstName={information.userData.firstName}
          lastName={information.userData.lastName}
        />
        <section id="hero" className="pt-5">
          <Hero
            img={information.userData.img}
            description={information.userData.description}
          />
        </section>
      </div>

      <section className="mb-4" id="experience">
        <span className="hash-span" id="experience-span"></span>
        <Experience />
      </section>

      <section id="projects">
        <span className="hash-span" id="projects-span"></span>
        <Projects />
      </section>

      <section className="mt-5" id="skills">
        <span className="hash-span" id="skills-span"></span>
        <SkillsAndTools />
      </section>

      <section className="pt-5" id="contact">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default App;
