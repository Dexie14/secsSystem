const { DM_Sans } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      body: [DM_Sans],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // 'call': "url('/assets/home/callImage.svg')"
      },
      colors: {
        primary: "#003518",
        background: "#EDFFF5",
        button: "#01B14F",
        dark: "#4F4F4F",
        border: "#016A2F"
      },
    },
  },
  plugins: [],
};
