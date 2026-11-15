import { useScrollReveal } from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import VisualPortfolio from "./components/VisualPortfolio";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  useScrollReveal();

  return (
    <div className="app-wrapper">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <VisualPortfolio />
        <Certifications />
      </main>

      <Contact />
    </div>
  );
}

export default App;