import "./App.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Resume from "./components/Resume";

function App() {
  return (

    <div className="App">
      <LandingPage />
      <Navigation />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      {/* <Resume /> */}
      <Footer />
    </div>

  );
}

export default App;
