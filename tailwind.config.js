module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "order-desktop":
          "url('/order-summary-component/pattern-background-desktop.svg')",
        "order-mobile":
          "url('/order-summary-component/pattern-background-mobile.svg')",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        big: ["Big Shoulders Display", "cursive"],
        lexend: ["Lexend Deca", "sans-serif"],
        redHat: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
