/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Outfit: ["Outfit", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
      Kanit: ["Kanit", "sans-serif"],
      Oswald: ["Oswald", "sans-serif"],
      Bebas_Neue: ["Bebas Neue", "sans-serif"],
      Fira_Sans_Condensed: ["Fira Sans Condensed", "sans-serif"],
      Orbitron: ["Orbitro", "sans-serif"],
      Archivo: ["Archivo", "sans-serif"],
      Dancing_Script: ["Dancing Script", "cursive"],
      Fresca: ["Fresca", "sans-serif"],
      Noto_Sans: ["NotoSans", "sans-serif"],
      Alegreya: ["Alegreya", "serif"],
    },
    extend: {
      transitionProperty: {
        height: "height",
      },
      animation: {
        scroll: "scroll 35s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - 4rem))" },
        },
      },
    },
    screens: {
      small: "300px",
      mob: "400px",
      tab: "640px",
      lap: "1024px",
      desk: "1650px",
    },
  },
  plugins: [],
};
