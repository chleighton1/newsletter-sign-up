/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    colors: {
      "drk-grey": "hsl(234, 29%, 20%)",
      "char-grey": "hsl(235, 18%, 26%)",
      "reg-grey": "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
      tomato: "hsl(4, 100%, 67%)",
      // box-shadow: 0px 16px 32px 0px rgba(255, 97, 85, 0.50);
    },
    extend: {
      backgroundImage: {
        "grad-test":
          "var(--Gradient-1, linear-gradient(204deg, #FF6A3A 0%, #FF527B 100%))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
