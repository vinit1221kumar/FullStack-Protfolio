import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* ⭐ Star Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(500)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-[2px] h-[2px] rounded-full ${
              Math.random() < 0.2
                ? "bg-red-500 animate-twinkle-red"
                : "bg-white animate-twinkle"
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        <div className="animate-shooting-star" />
      </div>

      <div className="flex flex-col">
        <Navbar />
        <main className="flex flex-col">
          <Hero />
          <div className="h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
          <About />
          <div className="h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
          <Skills />
          <div className="h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
          <Certificates />
          <div className="h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
          <Projects />
          <div className="h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
          <Contact />
          <div className="h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
