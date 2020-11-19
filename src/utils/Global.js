import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
  background:#E5E5E5;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;