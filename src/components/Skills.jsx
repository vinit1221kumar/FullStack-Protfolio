import React from "react";

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Mongo DB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black py-20 z-10 overflow-hidden"
    >
      {/* 🌟 Star background */}
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

      <h2 className="text-4xl font-bold text-center text-white mb-12">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-[140px] sm:w-[160px] md:w-[180px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-4 hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img
                src={skill.icon}
                alt={`${skill.name} Icon`}
                className="w-8 h-8 object-contain"
              />
            </div>
            <p className="text-center text-white font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
