import React, { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    image: "/ms.png",
    github:
      "https://github.com/vinit1221kumar/Employee-Management-System-in-React-Node-MySQL",
    link: "",
    description:
      "A comprehensive employee management system built with the MERN stack. Features include employee data management, attendance tracking, and performance monitoring.",
    features: [
      "User Authentication & Authorization",
      "Employee CRUD Operations",
      "Attendance Management",
      "Performance Analytics",
      "Role-based Access Control",
    ],
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Authentication",
    ],
  },
  {
    id: 2,
    name: "Admin Dashboard",
    technologies: "MERN Stack",
    image: "/ad.png",
    github: "https://github.com/vinit1221kumar/Admin-Dashboard",
    link: "",
    description:
      "A modern admin dashboard with comprehensive analytics, user management, and data visualization capabilities.",
    features: [
      "Real-time Analytics",
      "User Management",
      "Interactive Charts",
      "Responsive Design",
      "Dark/Light Theme",
    ],
    techStack: [
      "React.js",
      "Material-UI",
      "Chart.js",
      "Redux",
      "Node.js Backend",
    ],
  },
  {
    id: 3,
    name: "Weather App",
    technologies: "MERN Stack",
    image: "/w.png",
    github: "https://github.com/vinit1221kumar/weather-app",
    link: "vinit1221kumar.github.io/weather-app/",
    description:
      "A dynamic weather application that provides real-time weather updates .",
    features: [
      "Real-time Weather Updates",
      "Location-based Forecast",
      "Tech Stack Used",
      "Dynamic Icons & Backgrounds",
      "Clean & Minimal UI",
    ],
    techStack: [
      "React.js",
      "Weather API",
      "Geolocation",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-12 px-6 md:px-12 bg-black text-white"
    >
      {/* ✨ Sparkling Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        {[...Array(300)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
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
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-lg transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg w-full h-48 object-cover mb-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/400x250.png?text=Project+Image";
                }}
              />
              <h3 className="text-2xl font-semibold mb-1">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.technologies}</p>

              <div className="flex flex-wrap gap-4 mb-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 rounded-full text-sm text-white font-medium hover:scale-105 transition-transform"
                >
                  GitHub
                </a>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full text-sm text-white font-medium hover:scale-105 transition-transform"
                  >
                    Live Demo
                  </a>
                )}
                <button
                  onClick={() =>
                    setExpandedProject(
                      expandedProject === project.id ? null : project.id
                    )
                  }
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-full text-sm text-white font-medium hover:scale-105 transition-transform"
                >
                  {expandedProject === project.id ? "Show Less" : "Show More"}
                </button>
              </div>

              {/* Project Details */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedProject === project.id
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">
                      Key Features
                    </h4>
                    <ul className="text-gray-200 text-sm space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-white/20 px-2 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
