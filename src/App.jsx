import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import HomeSection from "./pages";
import About from "./pages/about";
import Resume from "./pages/resume";
import Services from "./pages/services";
import Projects from "./pages/Projects";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-100 scroll-smooth">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <main className="pt-16">
        <HomeSection />
        <About />
        <Resume />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
