const { trueGray } = require("tailwindcss/colors");

module.exports = {
  important: true,
  purge: {
    content: [
      "./public/index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      // './partyou-front-components/components/**/*.{vue,js,ts,jsx,tsx}'
    ],
    options: {
      safelist: [/^text-/, /^bg-/, /^from-/, /^to-/],
    },
  },

  safelist: [
    {
      pattern: /(text|bg|from|to|shadow)-/,
      variants: ["hover"],
    },
    { pattern: /^font-/ },
  ],

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          ...trueGray,
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
        'py-blue': {
          light: '#00DCFF',
          DEFAULT: '#27C2FF'
        }
      },
    },
  },
  plugins: [],
};
