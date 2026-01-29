import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="text-white text-center py-16 relative z-10 overflow-hidden">
      {/* ✨ Sparkling Stars Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* White & red stars */}
        {[...Array(300)].map((_, i) => (
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
          ></div>
        ))}

        {/* Breaking star */}
      </div>

      {/* Glassmorphism Wrapper */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl inline-block px-8 py-10 mx-auto relative z-20">
        {/* Profile Image */}
        <img
          src="/img.png"
          alt=""
          className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
          transition-transform duration-300 hover:scale-105 relative z-20"
        />

        {/* Animated Name + Role */}
        <h1 className="text-4xl font-bold relative z-20">
          Hello , I'm{" "}
          <TypeAnimation
            sequence={[
              "Vinit Kumar Singh",
              2000,
              "",
              500,
              "Front End Developer",
              2000,
              "",
              500,
              "Back End Developer",
              2000,
              "",
              500,
            ]}
            speed={50}
            repeat={Infinity}
            style={{
              display: "inline-block",
              background: "linear-gradient(to right,red,purple)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          />
        </h1>

        <p className="mt-4 text-lg text-gray-200 relative z-20">
          Designing intuitive user experiences by seamlessly integrating the
          frontend, backend,
          <br /> and database to build complete and efficient web applications.
        </p>

        <div className="mt-8 space-x-4 relative z-20">
          <a href="https://youtube.com/shorts/JBkSyD_N1ik?feature=share">
            <button className="bg-gradient-to-r from-blue-800 to-blue-900 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-[10px]">
              Video Cv
            </button>
          </a>
          <a href="cv.pdf" download>
            <button className="bg-gradient-to-r from-blue-800 to-blue-900 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-[10px]">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
