import "./css/App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
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
      <Projects />
      <Services />
      <Skills />
      <Testimonials />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
