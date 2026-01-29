import React from "react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I build fast, interactive user interfaces using modern frameworks like React. My focus is on performance, accessibility, and creating seamless experiences for all screen sizes.",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "I specialize in developing reliable APIs and secure server-side applications with Node.js, Express, and databases like MongoDB and MySQL, ensuring scalability and clean architecture.",
  },
  {
    id: 3,
    title: "Web Design",
    description:
      "I design intuitive, clean, and visually compelling interfaces that align with user expectations and branding. From wireframes to responsive UI, I focus on a pixel-perfect visual story.",
  },
];

const About = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="min-h-screen text-white flex items-center justify-center px-6 py-10 relative z-10 overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {[...Array(300)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-[2px] h-[2px] rounded-full ${
                Math.random() < 0.2
                  ? "bg-red-500 animate-twinkle-red"
                  : "bg-white animate-twinkle"
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-6xl w-full flex flex-col md:flex-row items-stretch gap-10">
          <div className="flex-1 flex items-center justify-center p-6 rounded-xl shadow-2xl border border-white/10 bg-white/5">
            <img
              src="/img.png"
              alt="About visual"
              className="max-h-[400px] w-auto object-contain rounded-xl"
            />
          </div>

          <div className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl border border-gray-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4 relative w-fit after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-gradient-to-r from-pink-500 to-purple-600 after:bottom-[-6px] after:left-0">
              About Me
            </h2>
            <p className="text-gray-200 text-[1.05rem] leading-relaxed mb-4">
              Hey! I'm{" "}
              <span className="font-semibold text-gradient bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Vinit Kumar Singh
              </span>
              , a passionate full-stack developer focused on building responsive
              and visually appealing applications.
            </p>
            <p className="text-gray-300 text-[1.05rem] leading-relaxed mb-4">
              I love clean code, smooth UI/UX, and diving into frameworks like{" "}
              <b className="text-white">React</b>,{" "}
              <b className="text-white">Node</b>, and{" "}
              <b className="text-white">Three.js</b>.
            </p>
            <p className="text-gray-400 text-[1.05rem] leading-relaxed">
              Outside of coding, I enjoy solving problems in{" "}
              <b className="text-white">C++</b> and exploring the world of
              JavaScript tools and libraries.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-black text-white pt-4 pb-8 relative z-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {[...Array(500)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-[2px] h-[2px] rounded-full ${
                Math.random() < 0.2
                  ? "bg-red-500 animate-twinkle-red"
                  : "bg-white animate-twinkle"
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-3 md:px-7 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 px-6 pb-6 pt-4 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400"></div>
                <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
