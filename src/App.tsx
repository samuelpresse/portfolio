import "./App.css";
import information from "./content/Information";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <div>
        <Navbar
          firstName={information.userData.firstName}
          lastName={information.userData.lastName}
        />
        <Hero
          img={information.userData.img}
          description={information.userData.description}
        />
      </div>
    </>
  );
}

export default App;
