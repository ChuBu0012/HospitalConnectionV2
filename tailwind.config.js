/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/bg.png')",
      },
      colors: {
        footer: "#2c69c6",
        fontform: "#141264",
        bginput: "#E3E7EB"
      },
    },
  },
  plugins: [],
};
