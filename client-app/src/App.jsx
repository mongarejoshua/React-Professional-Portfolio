import "./css/App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overlap from "./components/Overlap";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Overlap />
      <Projects />
      <Skills />
      <Reviews />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
