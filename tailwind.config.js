/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Bebas Neue",
      secondry: "Montserrat",
      body: "Oswald",
    },
    screens: {
      xxsm: "350px",

      xsm: "425px",

      xs: "550px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xlg: "1160px",
      // => @media (min-width: 1160px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primaryDark: "#0d0d0d",
        secondaryAccent: "#eb5939",
        light: "#fcfcfc",
        neutralLight: "#b7ab98",
        neutralDark: "#51504f",
      },
      backgroundImage: {
        heroImg: "url(./src/assets/images/mock-image.jpg)",
      },
    },
  },
  plugins: [],
};

// import img from './src/assets/images/mock-image.jpg'
