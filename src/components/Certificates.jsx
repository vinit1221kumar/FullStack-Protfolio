import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Introduction to Generative AI",
    image: "/genai.jpg",
    link: "https://coursera.org/verify/HT4VZFC8ET5Y",
    skills: ["Foundation of AI/ML", "Neural Networks", "Generative Models", "Prompt Engineering"],
  },
  {
    id: 2,
    title: "Introduction to Large Language Models",
    image: "/llm.jpg",
    link: "https://coursera.org/verify/BRLXNFZPH2BQ",
    skills: ["Transformer Architecture", "NLP Fundamentals", "LLM Training", "Fine-tuning Models"],
  },
  {
    id: 3,
    title: "The Bits and Bytes of Computer Networking",
    image: "/bbt.jpg",
    link: "https://coursera.org/verify/CERTIFICATE",
    skills: ["Network Protocols", "DNS", "DHCP", "TCP/IP"],
  },
];

const Certificates = () => {
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
    <section id="certificate" className="min-h-screen flex items-center justify-center py-20 relative bg-gradient-to-b from-slate-950 to-slate-900 border-2 m-6 rounded-2xl" style={{ borderImage: 'linear-gradient(135deg, rgb(168,85,247), rgb(236,72,153), rgb(168,85,247)) 1' }}>
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto" />
          <p className="text-slate-400 text-lg mt-6">Professional credentials and achievements</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-400/30 transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden bg-slate-900 h-40">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{cert.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 2).map((skill, idx) => (
                      <span key={idx} className="text-xs bg-gradient-to-r from-blue-500/30 to-cyan-400/30 text-cyan-300 px-3 py-1 rounded-full font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <motion.div
                    className="mt-4 text-blue-400 font-semibold text-sm group-hover:text-cyan-300 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    View Certificate →
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
