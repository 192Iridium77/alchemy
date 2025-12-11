/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      fontSize: {
        "5xl": "4.5rem",
        "4xl": "4rem", // 64px (if base font is 16px)
        "3xlgr": "3.375rem", // 54px
        "3xl": "2.5rem", // 40px
        "2xl": "2rem", // 32px
        xl: "1.75rem", // 28px
        lgr: "1.5rem", // 24px
        lg: "1.25rem", // 20px
        base: "1rem", // 16px
        sm: "0.875rem", // 14px
        xs: "0.75rem", // 12px
      },
      screens: {
        "2xl": "1536px",
      },
      zIndex: {
        "-1": "-1",
        1: "1",
        2: "2",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
      padding: {
        44: "11rem",
      },
      height: {
        60: "15rem",
        80: "20rem",
        96: "24rem",
        104: "26rem",
        120: "30rem",
        128: "32rem",
        160: "40rem",
        200: "50rem",
        "1/2": "50%",
        "1/4": "25%",
        "3/4": "75%",
        "60vh": "60vh",
        "65vh": "65vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      minHeight: {
        12: "3rem",
        16: "4rem",
        24: "6.25rem",
        28: "7rem",
        32: "8rem",
        96: "24rem",
      },
      maxHeight: {
        32: "8rem",
      },
      maxWidth: {
        max: "max-content",
      },

      width: {
        44: "11rem",
        96: "24rem",
        120: "30rem",
        128: "32rem",
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "37.5%",
        "4/8": "50%",
        "5/8": "62.5%",
        "6/8": "75%",
        "7/8": "87.5%",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      aspectRatio: {
        square: [1, 1],
        "21/9": [21, 9],
        "16/9": [16, 9],
        "4/3": [4, 3],
        "3/4": [3, 4],
        "10/16": [10, 16],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      inset: {
        "-8": "-2rem",
        "-6": "-1rem",
      },
      colors: {
        blackFade: () => {
          return `rgba(0,0,0,0.1)`;
        },
        gray: {
          100: "#eeeeee",
          200: "#DBDBDB",
          400: "#cbd5e0",
          600: "#707070",
          700: "#383838",
          800: "#c3c3c3",
          900: "#101010",
        },
        links: {
          100: "#B8B6B6",
          500: "#E3E3E3",
        },
        error: {
          200: "#E12127",
        },
        primary: {
          100: "#e87694",
          200: "#AD1C42",
        },
      },
      fontWeight: {
        book: 400,
        regular: 450,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-aspect-ratio")],
};
