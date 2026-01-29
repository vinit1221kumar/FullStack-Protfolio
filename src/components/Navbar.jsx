import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const email = import.meta.env.VITE_CONTACT_EMAIL || "";

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Certificates", href: "#certificate" },
    { label: "Projects", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

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
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-950 to-slate-900 border-b-2 backdrop-blur-md"
      style={{ borderImage: 'linear-gradient(90deg, rgb(168,85,247), rgb(236,72,153), rgb(168,85,247)) 1', borderImageSlice: 1 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Portfolio
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          className="hidden md:flex items-center space-x-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              variants={itemVariants}
              className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-full"
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="/Vinit_fullstack_CV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="px-6 py-2 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-200"
              whileHover={{ y: -2 }}
            >
              Download CV
            </motion.button>
          </motion.a>
          <motion.a
            href={email ? `mailto:${email}` : "#"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-200"
              whileHover={{ y: -2 }}
            >
              Get in Touch
            </motion.button>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
