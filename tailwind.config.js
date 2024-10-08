/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        red: "#FF0000",
        green: "#03444A",
        blue600: "#068893",
        blue100: "#9EF3FA",
        blue700: "#05717B",
        blue500: "#079FAC",
        gray700: "#4D4D4D",
        gray900: "#1A1A1A",
        gray400: "#999999",
        gray500: "#808080",
        gray800: "#333333",
        grayBg: "#F2F2F2",
        gray100: "#E5E5E5",
        gray600: "#666666",
        gray901: "#022D31",
        gray300: "#B2B2B2",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        greatVibes: ["Great Vibes", "cursive"],
      },
    },
    screens: {
      xxs: "350px",
      xxss: "390px",
      xss: "450px",
      xs: "500px",
      ss: "580px",
      sm: "768px",
      md: "993px",
      lg: "1100px",
      xl: "1200px",
      xll: "1400px",
      xxl: "1500px",
      xxll: "1600px",
      xxxl: "1800px",
      xxxxl: "2000px",
    },
  },
  plugins: [],
};
