// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- fixed glob
  ],
  theme: {
    extend: {
      animation: {
        twinkle: "twinkle 3s infinite ease-in-out",
        "twinkle-red": "twinkle-red 4s infinite ease-in-out",
        "shooting-star": "shooting-star 5s linear infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.5)" },
        },
        "twinkle-red": {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
        "shooting-star": {
          "0%": { transform: "translate(0, 0) scaleX(1)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": {
            opacity: "1",
            transform: "translate(500px, 200px) scaleX(1.5)",
          },
          "100%": {
            opacity: "0",
            transform: "translate(600px, 250px) scaleX(1.8)",
          },
        },
      },
      rotate: {
        "y-180": "180deg",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective": {
          perspective: "1000px",
        },
        ".preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
      });
    },
  ],
};
