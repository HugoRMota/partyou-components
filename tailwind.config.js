const { gray } = require("tailwindcss/colors");

module.exports = {
  important: true,

  safelist: [
    {
      pattern: /(text|bg|from|to|font|shadow|border)-/,
      variants: ["lg", "hover", "focus", "lg:hover", "before"],
    },
  ],

  content: [
    "./index.html",
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx,html}",
    "./node_modules/partyou-components-v2/tailwind-components/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          ...gray,
          950: "#050505",
          850: "#212121",
          750: "#323232",
          550: "#666666",
          380: "#B3B3B3",
          340: "#CBCBCB",
          150: "#EBEBEB",
          120: "#F6F6F6",
        },
        primary: "var(--py-color)",
        danger: "##FF3A44",
        "py-blue": {
          light: "#00DCFF",
          DEFAULT: "#27C2FF",
          toogle: "#93E0FF",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
