import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/vinit1221kumar", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/vinit-kumar-singh", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 border-2 m-6 rounded-2xl py-12" style={{ borderImage: 'linear-gradient(135deg, rgb(168,85,247), rgb(236,72,153), rgb(168,85,247)) 1' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">VKS</h3>
            <p className="text-slate-400">
              Full-stack developer <span className="text-blue-400 font-semibold">crafting modern web solutions</span> with <span className="text-cyan-300 font-semibold">clean code</span> and <span className="text-blue-400 font-semibold">beautiful designs</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-blue-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#project" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-cyan-300 mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 border border-slate-700 hover:border-blue-400/50 transition-all duration-300"
                    title={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-800 pt-8 text-center text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Vinit Kumar Singh</span>. All rights reserved.</p>
          <p className="text-sm mt-2">Designed & Built with <span className="text-red-500">❤️</span> using <span className="text-cyan-300 font-semibold">React</span> & <span className="text-blue-400 font-semibold">Framer Motion</span></p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
