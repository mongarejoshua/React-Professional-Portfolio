import "./css/App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overlap from "./components/Overlap";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Clients";
import Blog from "./components/Blog";
import About from "./components/About";
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
      <Testimonials />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
