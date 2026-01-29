import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const email = import.meta.env.VITE_CONTACT_EMAIL || "";
  const phone = import.meta.env.VITE_CONTACT_PHONE || "";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    if (!email) return;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
  };
  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: email, href: email ? `mailto:${email}` : "#" },
    { icon: FaPhone, label: "Phone", value: phone, href: phone ? `tel:${phone}` : "#" },
    { icon: FaMapMarkedAlt, label: "Location", value: "India", href: "#" },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative bg-gradient-to-b from-slate-900 to-slate-950 border-2 m-6 rounded-2xl" style={{ borderImage: 'linear-gradient(135deg, rgb(168,85,247), rgb(236,72,153), rgb(168,85,247)) 1' }} id="contact">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto" />
          <p className="text-slate-400 text-lg mt-6">Let's discuss your <span className="text-emerald-400 font-semibold">next project</span> or <span className="text-orange-400 font-semibold">collaboration opportunity</span></p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl hover:border-emerald-400/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-teal-400/20 rounded-lg group-hover:from-emerald-500/30 group-hover:to-teal-400/30 transition-all duration-300">
                    <Icon className="text-emerald-400 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-emerald-400 font-semibold mb-1">{info.label}</h3>
                    <p className="text-slate-400">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-blue-400 font-semibold mb-2">Name</label>
              <motion.input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 transition-all duration-300"
                whileFocus={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)" }}
              />
            </div>

            <div>
              <label className="block text-blue-400 font-semibold mb-2">Email</label>
              <motion.input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 transition-all duration-300"
                whileFocus={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)" }}
              />
            </div>

            <div>
              <label className="block text-blue-400 font-semibold mb-2">Message</label>
              <motion.textarea
                name="message"
                placeholder="Your message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 transition-all duration-300 resize-none"
                whileFocus={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)" }}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
