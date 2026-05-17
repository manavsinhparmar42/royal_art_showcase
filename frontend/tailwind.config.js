// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalBlue: "#0A1D5D",
        gold: "#D4AF37",
        ivory: "#FFFFF0",
        velvet: "#4B2E2E",
      },
      fontFamily: {
        serif: ["Cinzel", "serif"],
        elegant: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        royal: "0 4px 20px rgba(212, 175, 55, 0.5)", // golden glow
      },
      animation: {
        fadeIn: "fadeIn 2s ease-out forwards",
        curtain: "curtain 1.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        curtain: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
