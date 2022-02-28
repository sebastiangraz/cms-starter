const core = [2, 4, 6, 8, 12, 16, 24, 32, 40, 56, 72, 96, 120];
const coreAmplified = core.map((e) => e * 2);
export default {
  spacing: core,
  sizes: coreAmplified,
  fontSizes: coreAmplified,
  breakpoints: ["40em", "64em", "120em"],
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "beige",
    primary: "#33e",
  },
  layout: {
    row: {
      width: "88%",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    footer: {
      color: "white",
      backgroundColor: "black",
    },
  },
  styles: {
    root: {
      bg: "background",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      fontFamily: "monospace",
    },
    link: {
      color: "inherit",
      textDecoration: "underline",
      "&:hover": { textDecoration: "none" },
    },
    h1: {
      fontSize: 7,
    },
    a: {
      variant: "styles.link",
    },
  },
};
