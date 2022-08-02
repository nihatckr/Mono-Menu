import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
}
h1,h2,h3,h4{
  font-family:'Mono Light'; 
}
 
p{
  font-family: 'Inter', sans-serif;
}
@font-face {
  font-family: 'Mono Light';
  src: url('fonts/MonoTRegular.ttf') format('woff');
  font-style: normal;
  font-weight: 300;
  font-display: fallback;  
}
 
`;
export const theme = {
  dark: {
    colors: {
      title: "#FFFFFF",
      subtitle: "#FFFFFF",
      price: "#000000",
      header: "red",
      link: "#727272",
    },
  },
  light: {
    colors: {
      title: "#000000",
      subtitle: "#727272",
      price: "#000000",
      header: "red",
      link: "#727272",
    },
  },
  fontSize: {
    xs: "8px",
    md: "10px",
    ml: "15px",
    lg: "18px",
    xl: "28px",
    xxl: "28px",
  },
  fontWeight: {
    xs: "300",
    md: "500",
    lg: "600",
    xl: "700",
    xxl: "800",
  },
  lineHeight: {
    xs: "130%",
    md: "130%",
    ml: "130%",
    lg: "130%",
    xl: "130%",
    xxl: "130%",
  },
};
