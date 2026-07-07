/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050705",
        secondary: "#a9b3a3",
        tertiary: "#0d120d",
        accent: "#c2f24e",
        "accent-soft": "#dceeb6",
        "black-100": "#121212",
        "black-200": "#070a07",
        "white-100": "#eef3ec",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #000000",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(circle at 15% 10%, rgba(194,242,78,0.12), transparent 45%), radial-gradient(circle at 85% 25%, rgba(194,242,78,0.08), transparent 40%), #050705",
      },
    },
  },
  plugins: [],
};
