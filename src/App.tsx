import "./App.css";
import information from "./content/Information";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

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
    </>
  );
}

export default App;
