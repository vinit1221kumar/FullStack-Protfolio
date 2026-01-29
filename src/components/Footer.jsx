import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-6">
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

      <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-3">
          <div className="flex-1 mb-4 md:mb-0 backdrop-blur-sm bg-white/5 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Vinit Kumar Singh
            </h3>
            <p className="text-gray-400">
              Creative Full-Stack Developer from India, crafting modern web and
              software solutions with precision and passion.
            </p>
          </div>
          <div className="flex-1 w-full"></div>
        </div>

        <div className="border-t border-gray-600 pt-3 flex flex-col md:flex-row justify-between items-center backdrop-blur-sm bg-white/5 p-4 rounded-xl mt-3">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Vinit. All rights reserved.
          </p>
          <div className="flex space-x-6 my-4 md:my-0">
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transform hover:scale-125 transition-all"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/vinitsingh4652?igsh=MW96MXE3bjUycW50bA=="
              className="text-gray-400 hover:text-green-400 transform hover:scale-125 transition-all"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="www.linkedin.com/in/vinit-kumar-singh"
              className="text-gray-400 hover:text-green-400 transform hover:scale-125 transition-all"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/vinit1221kumar"
              className="text-gray-400 hover:text-green-400 transform hover:scale-125 transition-all"
            >
              <FaGithub size={20} />
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
