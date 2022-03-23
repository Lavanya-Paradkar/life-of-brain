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
        lightblue:"#4286CF",
        wood:'#A0522D',
        lob_green:'#3CAEA3',
        lob_lightgreen:'#06D6A0',
        lob_yellow:'#F6D55C',
        navyblue: '#6194B0',
        peachdark: '#EBA793',
        lighterblue: '#E8F3FA',

      },
      spacing: {
        '128': '32rem', // standard of 128 / 4 = 32
        '112': '28rem',
        '144': '36rem',

      },
      keyframes: {
        slideUp: {
          '0%, 5%': {
              opacity: 0
          },
          '29%, 34%': {
            transform: 'translateY(250px)',
            opacity: 1
          },
          '82%, 100%': {
              transform: 'translateY(0)',
              opacity: 1
          },
        },
        popUp: {
          '0%': {
              transform: 'scale(0.7)'
          },
          '50%': {
            transform: 'scale(1.1)'
          },
          '100%': {
              transform: 'scale(1.0)'
          },
        },
        fadeIn : {
          '0%, 20%': {
              opacity: 0
          },
          '62%, 100%': {
              opacity: 1
          },
        },
      },
      animation: {
          slideUp0: 'slideUp 1.5s ease forwards',
          slideUp1: 'slideUp 2.2s ease forwards',
          slideUp2: 'slideUp 2.9s ease forwards',
          slideUp3: 'slideUp 3.6s ease forwards',
          fadeIn: 'fadeIn 1.5s ease-out forwards',
          fadeIn2: 'fadeIn 3s ease-out forwards',
          popUp: 'popUp 2s ease',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
