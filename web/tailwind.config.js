const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        DEFAULT: "95rem",
      },
    },
    containerExtended: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        DEFAULT: "90rem",
      },
    },
    fontFamily: {
      heading: ['"Cormorant", serif'],
      // display: [''],
      body: ['"Catamaran", sans-serif'],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
      },
      borderRadius: {
        "3xl": "1.25rem",
        "4xl": "1.5rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      boxShadow: {
        "3xl": "0px 4px 6px rgba(0, 0, 0, 0.04)",
        "4xl": "0px 4px 40px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        gray: {
          900: "#1A1A1A",
          800: "#333333",
          700: "#485159",
          600: "#666666",
          500: "#808080",
          400: "#999999",
          300: "#B2B2B2",
          200: "#CCCCCC",
          100: "#E6E6E6",
          50: "#F7F7F7",
        },
        primary: {
          900: "#002E33",
          // 800: "",
          // 700: "",
          // 600: "",
          500: "#117263",
          // 400: "",
          // 300: "",
          // 200: "",
          // 100: "",
          // 50: "",
        },
        secondary: {
          // 900: "",
          // 800: "",
          // 700: "",
          // 600: "",
          500: "#DD9B5F",
          // 400: "",
          // 300: "",
          // 200: "",
          // 100: "",
          // 50: "",
        },
        tertiary: {
          // 900: "",
          // 800: "",
          // 700: "",
          // 600: "",
          500: "#64ABB7",
          // 400: "",
          // 300: "",
          200: "#B8DFE5",
          100: "#CFE2E5",
          50: "#F0F6F7",
        },
        typography: {
          heading: "#1A1A1A",
          body: "#666666",
        },
      },
      fontSize: {
        xs: ["0.688rem", "1rem"],
        sm: ["0.875rem", "1.375rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.5rem"],
        xl: ["1.25rem", "1.688rem"],
        "2xl": ["1.25rem", "1.875rem"],
        "3xl": ["1.5rem", "2.125rem"],
        "4xl": ["1.875rem", "2.271rem"],
        "5xl": ["2.5rem", "3.028rem"],
        "6xl": ["3rem", "3.633rem"],
        "7xl": ["6.875rem", "7.188rem"],
        // "8xl": ["", ""],
        // "9xl": ["", ""],
        // "mobile-3xl": ["", ""],
        "mobile-4xl": ["1.5rem", "2.125rem"],
        "mobile-5xl": ["2.188rem", "2.5rem"],
        "mobile-6xl": ["2.5rem", "2.875rem"],
        "mobile-7xl": ["3.75rem", "4rem"],
        // "mobile-8xl": ["", ""],
        // "mobile-9xl": ["rem", "rem"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      // letterSpacing: {
      //   wide: "",
      //   wider: "",
      //   widest: "",
      // },
      ringWidth: {
        3: "3px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
