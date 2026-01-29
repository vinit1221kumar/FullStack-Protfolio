import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  const email = import.meta.env.VITE_CONTACT_EMAIL || "";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative border-2 m-6 rounded-2xl" style={{ borderImage: 'linear-gradient(135deg, rgb(168,85,247), rgb(236,72,153), rgb(168,85,247)) 1' }} id="home">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-2xl" />
      
      {/* Gradient Blur Background */}
      <div className="absolute top-20 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl -z-10" />

      <motion.div
        className="max-w-4xl mx-auto px-6 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants}>
          <motion.img
            src="/img.png"
            alt="Profile"
            className="mx-auto mb-8 w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-slate-700 shadow-2xl shadow-blue-500/10"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Title and Role */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-sm md:text-base font-semibold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2 tracking-widest uppercase">Welcome to my portfolio</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Vinit Kumar Singh</span>
          </h1>
        </motion.div>

        {/* Animated Role */}
        <motion.div variants={itemVariants} className="mb-6 h-16">
          <TypeAnimation
            sequence={[
              "Full-Stack Developer",
              2000,
              "Frontend Developer",
              2000,
              "Backend Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-slate-300 font-medium"
          />
        </motion.div>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
          I build <span className="text-emerald-400 font-semibold">responsive, scalable web applications</span> by seamlessly integrating <span className="text-orange-400 font-semibold">frontend, backend, and databases</span>. Passionate about <span className="text-emerald-400 font-semibold">clean code</span> and <span className="text-orange-400 font-semibold">excellent user experiences</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#project"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-200"
          >
            View My Work
          </motion.a>
          <motion.a
            href={email ? `mailto:${email}` : "#"}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-colors duration-200"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
