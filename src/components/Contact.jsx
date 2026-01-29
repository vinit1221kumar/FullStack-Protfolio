import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative bg-black text-white py-12" id="contact">
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
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1 backdrop-blur-sm bg-white/5 p-8 rounded-xl">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4"
            >
              Let's Talk
            </h3>
            <p className="text-gray-300">
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8 hover:translate-x-2 transition-transform">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a
                href="mailto:vk3266748@gmail.com"
                className="hover:text-green-400 transition-colors"
              >
                vk3266748@gmail.com
              </a>
            </div>
            <div className="mb-4 hover:translate-x-2 transition-transform">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>8881795602</span>
            </div>
            <div className="mb-4 hover:translate-x-2 transition-transform">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span> UP, India</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4 backdrop-blur-sm bg-white/5 p-8 rounded-xl">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800/50 border border-gray-600 focus:outline-none
                    focus:border-green-400 transition-colors"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 rounded bg-gray-800/50 border border-gray-600 focus:outline-none
                    focus:border-green-400 transition-colors"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  className="w-full p-2 rounded bg-gray-800/50 border border-gray-600 focus:outline-none
                    focus:border-green-400 transition-colors"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <button
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white w-full md:w-auto
                transform transition-all duration-300 hover:scale-105 px-8 py-2 rounded-full
                hover:shadow-lg hover:shadow-green-500/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
