/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-soft": "rgb(var(--color-accent-soft) / <alpha-value>)",
        "black-100": "rgb(var(--color-black-100) / <alpha-value>)",
        "black-200": "rgb(var(--color-black-200) / <alpha-value>)",
        "white-100": "rgb(var(--color-white-100) / <alpha-value>)",
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
          "radial-gradient(circle at 15% 10%, rgb(var(--color-accent) / 0.12), transparent 45%), radial-gradient(circle at 85% 25%, rgb(var(--color-accent) / 0.08), transparent 40%), rgb(var(--color-primary))",
      },
    },
  },
  plugins: [],
};
