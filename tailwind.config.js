const fontStack = [
  "Nunito",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica Neue",
  "Arial",
  "Noto Sans",
  "sans-serif",
];
module.exports = {
  theme: {
    extend: {
      colors: {
        lightergrey: "#6c6c6c",
        darkergrey: "rgb(59,59,59)",
        offwhite: "#f3f2f2",
        dark: "#555B6E",
        dusk: "#5a8853",
        afternoon: "#5ba050",
        morning: "#edffea",
        dawn: "#F7F9FC",
        accent: "#FFD6BA",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      display: fontStack,
      body: fontStack,
      sans: fontStack,
    },
  },
  variants: {},
  plugins: [],
  purge: {
    content: ["./src/**/*.js"],
  },
};
