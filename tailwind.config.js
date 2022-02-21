module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lob_text: {
          peach: "#FDA85A",
          DEFAULT: "#034694",
        },
        peachpuff: "#FFDAB9",
        peachlight:"#FFE5B4",
        papayalight:"#FAF7F0",
      },
      spacing: {
        '128': '32rem', // standard of 128 / 4 = 32
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
