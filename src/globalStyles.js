import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
  }
  
  html, body {
    height: 100%;
  }
  
  #root {
    height: 100vh;
  }
`;
