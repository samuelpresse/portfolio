import "./App.css";
import information from "./content/Information";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsAndTools from "./components/SkillsAndTools";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar
        firstName={information.userData.firstName}
        lastName={information.userData.lastName}
      />
      <section id="hero">
        <Hero
          img={information.userData.img}
          description={information.userData.description}
        />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <SkillsAndTools />
      </section>

      <section id="contact">
        <ContactForm></ContactForm>
      </section>

      <Footer></Footer>
    </>
  );
}

export default App;
