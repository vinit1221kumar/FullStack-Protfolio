import React from "react";

const certificates = [
  {
    namee: "Introduction to Generative AI",
    imgPath: "/genai.jpg",
    link: "https://coursera.org/verify/HT4VZFC8ET5Y",
    skills: [
      "Foundation of AI/ML",
      "Neural Networks",
      "Generative Models",
      "Prompt Engineering",
      "AI Ethics & Safety",
    ],
  },
  {
    namee: "Introduction to Large Language Models",
    imgPath: "/llm.jpg",
    link: "https://coursera.org/verify/BRLXNFZPH2BQ",
    skills: [
      "Transformer Architecture",
      "NLP Fundamentals",
      "LLM Training",
      "Fine-tuning Models",
      "Token Optimization",
    ],
  },
  {
    namee: "The Bits and Bytes of Computer Networking",
    imgPath: "/bbt.jpg",
    link: "https://coursera.org/verify/QWXNLZYDXYJ6",
    skills: [
      "TCP/IP Protocol",
      "Network Security",
      "OSI Model",
      "Routing & Switching",
      "Network Troubleshooting",
    ],
  },
  {
    namee: "Prompt Engineering for ChatGPT",
    imgPath: "/chatgpt.jpg",
    link: "https://coursera.org/verify/7X463GTGQFWC",
    skills: [
      "C#",
      "Clarity & Specificity Matter",
      "Instruction Format Affects Output",
      "Few-shot Examples Guide Behavior",
      "Iterative Refinement is Key",
    ],
  },
];

const Certificates = () => {
  return (
    <section
      id="certificate"
      className="relative py-12 px-6 md:px-12 text-center bg-black"
    >
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

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8">
          My Certifications
        </h1>

        <div className="w-full h-full md:px-10 px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <div key={cert.namee} className="group h-[300px] perspective">
                <div className="relative preserve-3d duration-1000 w-full h-full group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute backface-hidden w-full h-full">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-md h-full">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={cert.imgPath}
                          alt={cert.namee}
                          className="w-full h-48 object-contain mb-3 transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://via.placeholder.com/300x150.png?text=Certificate+Image";
                          }}
                        />
                      </a>
                      <p className="font-medium text-gray-100 text-center text-sm">
                        {cert.namee}
                      </p>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute backface-hidden w-full h-full rotate-y-180">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-md h-full flex flex-col justify-center">
                      <h3 className="text-white font-semibold mb-4">
                        Skills Learned
                      </h3>
                      <ul className="text-gray-200 text-sm space-y-2">
                        {cert.skills.map((skill, index) => (
                          <li
                            key={index}
                            className="flex items-center justify-center"
                          >
                            <span className="text-green-400 mr-2">✓</span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
