// eslint-disable-next-line @typescript-eslint/no-var-requires
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");
const PX0_300 = { ...Array.from(Array(301)).map((_, i) => `${i / 10}rem`) };
const PX0_50 = { ...Array.from(Array(51)).map((_, i) => `${i / 10}rem`) };

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/application/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: PX0_300,
      borderRadius: PX0_50,
      minWidth: PX0_300,
      maxWidth: PX0_300,
      minHeight: PX0_300,
      colors: {
        "light-gray-10": "#f6f6f6",
        "light-gray-20": "#eeeeee",
        "light-gray-30": "#d9d9d9",
        "gray-10": "#c4c4c4",
        "gray-20": "#666666",
        "dark-gray-10": "#383838",
        "dark-gray-20": "#242424",
        brand: "#a0c3d2",
        bookmark: "#ffc564",
      },
      fontSize: {
        header: [
          "1.8rem",
          {
            lineHeight: "140%",
            letterSpacing: "0em",
            fontWeight: "700",
          },
        ],
        title: [
          "2rem",
          {
            lineHeight: "140%",
            letterSpacing: "0em",
            fontWeight: "700",
          },
        ],
        tag: [
          "1.5rem",
          {
            lineHeight: "130%",
            letterSpacing: "0em",
            fontWeight: "600",
          },
        ],
        regular: [
          "1.6rem",
          {
            lineHeight: "130%",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],
        "semi-bold": [
          "1.6rem",
          {
            lineHeight: "130%",
            letterSpacing: "0em",
            fontWeight: "600",
          },
        ],
        label: [
          "1.2rem",
          {
            lineHeight: "1.4rem", //TODO: label tag lineheight 디자인 체크
            letterSpacing: "0em",
            fontWeight: "600",
          },
        ],
      },
      fontFamily: {
        sans: ["var(--font-pretendardVariable)", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        slideDown: {
          "0%": { height: 0 },
          "100%": { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          "0%": { height: "var(--radix-accordion-content-height)" },
          "100%": { height: 0 },
        },
      },
      animation: {
        "slide-down": "slideDown 300ms cubic-bezier(0.87,0,0.13,1)",
        "slide-up": "slideUp 300ms cubic-bezier(0.87,0,0.13,1)",
      },
    },
  },
  plugins: [],
};
