import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "HealthSync AI",
    subtitle: "Fitness, Diet & Pose Detection System",
    tech: "React, Vite, Node.js, Express, MongoDB, TensorFlow.js MoveNet, HuggingFace LLMs",
    timeline: "June 2025 – August 2025",
    image: "/HealthSync-AI.png",
    github: "https://github.com/vinit1221kumar/HealthSync-AI",
    description: "AI-powered fitness automation engine with real-time pose detection and personalized wellness recommendations",
    features: [
      "100+ personalized workout plans using 10+ health metrics (30% accuracy improvement)",
      "Real-time pose detection with MoveNet achieving 30FPS across 15+ exercises (25% form error reduction)",
      "1,000+ daily calorie logs processed with 85% prediction accuracy",
      "50+ dynamic meal plans optimized for 3 diet types (40% efficiency improvement)",
      "Multi-period dashboards visualizing 7/30/90-day trends across 100+ data points"
    ],
  },
  {
    id: 2,
    name: "CareerCraft AI",
    subtitle: "Resume Analyzer & Roadmap Platform",
    tech: "React, Vite, Node.js, Express, MongoDB, HuggingFace Embeddings & LLMs",
    timeline: "Jan 2025 – Apr 2025",
    image: "/CareerCraft-AI.png",
    github: "https://github.com/vinit1221kumar/CareerCarft-AI",
    description: "NLP-powered platform for resume analysis, AI scoring, and personalized career development roadmaps",
    features: [
      "NLP pipeline parsing 100+ resumes with 20+ structured field extraction (60% efficiency gain)",
      "AI scoring system using embeddings/LLMs generating 1–100 score reports across 10+ criteria (95% consistency)",
      "Skill-gap analysis mapping 300+ skills across 5 job roles (35% recommendation improvement)",
      "Personalized 4–8 week learning roadmaps with 40+ milestones (20% completion rate boost)",
      "Admin dashboard aggregating 100+ reports with top 10 skill gap insights (50% batch-level improvement)"
    ],
  },
  {
    id: 3,
    name: "EcoBin",
    subtitle: "Community E-Waste Pickup System",
    tech: "React, Node.js, Express, MongoDB, MinIO, Docker, JWT",
    timeline: "Sept 2025 – Nov 2025",
    image: "/Ecobin.png",
    github: "https://github.com/vinit1221kumar/ecobin",
    description: "Full-stack e-waste management platform with role-based dashboards and gamified credit system",
    features: [
      "Managed 500+ pickup requests across 3 user roles with 5-step lifecycle (40% operational flow improvement)",
      "3 role-based dashboards with 20+ optimized UI screens (35% task-completion time reduction)",
      "Credit engine awarding 2,000+ credits (45% user engagement increase)",
      "Full frontend + backend containerized with Docker (70% deployment time reduction, zero environment inconsistencies)"
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="project" className="min-h-screen flex items-center justify-center py-20 relative bg-gradient-to-b from-slate-900 to-slate-950 border-2 m-6 rounded-2xl" style={{ borderImage: 'linear-gradient(135deg, rgb(168,85,247), rgb(236,72,153), rgb(168,85,247)) 1' }}>
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto" />
          <p className="text-slate-400 text-lg mt-6">Showcasing my best work and technical expertise</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-400/30 transition-all duration-300 h-full">
                <div className="relative overflow-hidden bg-slate-900 h-56">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.name}</h3>
                      <p className="text-sm text-cyan-300 font-semibold">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mb-3 font-medium">{project.timeline}</p>
                  <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(", ").slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gradient-to-r from-blue-500/30 to-cyan-400/30 text-cyan-300 px-3 py-1 rounded-full font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">{selectedProject.name}</h3>
                    <p className="text-cyan-300 font-semibold mb-2">{selectedProject.subtitle}</p>
                    <p className="text-xs text-slate-400 mb-3">{selectedProject.timeline}</p>
                    <p className="text-slate-400">{selectedProject.description}</p>
                  </div>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    onClick={() => setSelectedProject(null)}
                    className="text-2xl text-slate-400 hover:text-white"
                  >
                    ✕
                  </motion.button>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.split(", ").map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gradient-to-r from-blue-500/30 to-cyan-400/30 text-cyan-300 px-3 py-1 rounded-full font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Achievements & Features:</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <span className="text-cyan-400 font-bold mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50"
                >
                  View Full Project on GitHub
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
