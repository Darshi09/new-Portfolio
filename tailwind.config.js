/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
  // Existing palette
  brown: "#4a3f35",
  lightBrown: "#7b6658",
  darkBrown: "#2a211b",

  black: "#1a1a1a",
  white: "#f9f5f0",

  cyan: "#00c2c7",
  lightCyan: "#a2eff2",
  darkCyan: "#007c80",

  orange: "#f88f27",
  lightOrange: "#ffc585",
  darkOrange: "#b3641d",

  grey: "#585c5a",
  lightGrey: "#a89f9a",
  darkGrey: "#2f3230",

  // ✅ New pink & purple theme
  pink: "#ff69b4",           // Hot Pink
  lightPink: "#ffc0cb",      // Baby Pink
  darkPink: "#d63384",       // Deep Rose

  purple: "#a855f7",         // Violet Purple
  lightPurple: "#d8b4fe",    // Soft Lavender
  darkPurple: "#7e22ce",     // Royal Purple
},

    extend: {
  boxShadow: {
    cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
    cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
    cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
    orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
    orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",

    // ✅ Add pink/purple shadows
    pinkShadow: "0 0 20px 0 rgba(255, 105, 180, 0.5)",
    purpleShadow: "0 0 20px 0 rgba(168, 85, 247, 0.5)",
  },
},
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
