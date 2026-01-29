import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-20 relative bg-gradient-to-b from-slate-900 to-slate-950 border-2 m-6 rounded-2xl"
        style={{ borderImage: 'linear-gradient(135deg, rgb(168,85,247), rgb(236,72,153), rgb(168,85,247)) 1' }}
      >
        <div className="max-w-6xl w-full">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <motion.img
                src="/img.png"
                alt="Profile"
                className="w-72 h-72 rounded-2xl object-cover border-4 border-slate-700 shadow-2xl shadow-blue-500/20"
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Summary</h3>
                  <p className="text-slate-400 leading-relaxed">
                    A <span className="text-emerald-400 font-semibold">detail-oriented full-stack developer</span> with a focus on <span className="text-orange-400 font-semibold">practical, user-centered system design</span> incorporating <span className="text-emerald-400 font-semibold">clean engineering</span> and <span className="text-amber-400 font-semibold">applied AI</span>. Skilled in converting <span className="text-emerald-400 font-semibold">complex ideas into scalable React-Node.js applications</span> backed by NoSQL databases. Fast learner, analytical thinker, and driven toward building <span className="text-orange-400 font-semibold">reliable, efficient, and genuinely useful products</span>.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Core Expertise</h3>
                  <p className="text-slate-400 leading-relaxed">
                    <span className="text-emerald-400 font-semibold">Languages:</span> C++, JavaScript, HTML, CSS, Python<br/>
                    <span className="text-orange-400 font-semibold">Frameworks:</span> Node.js, React.js, Express.js<br/>
                    <span className="text-amber-400 font-semibold">Tools:</span> MongoDB, MySQL, Postgres, JWT Authentication, MinIO<br/>
                    <span className="text-emerald-400 font-semibold">Fundamentals:</span> OOP, Data Structures & Algorithms
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Soft Skills</h3>
                  <p className="text-slate-400 leading-relaxed">
                    <span className="text-emerald-400 font-semibold">Problem-solving</span>, <span className="text-orange-400 font-semibold">Adaptability</span>, <span className="text-amber-400 font-semibold">Time management</span>, <span className="text-emerald-400 font-semibold">Responsibility</span>, <span className="text-orange-400 font-semibold">Discipline</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
