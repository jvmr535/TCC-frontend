import { createGlobalStyle } from "styled-components";
import { colorPalette } from "./colorPalette";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none !important;
    outline: 0 !important;
  }

  body {
    background-color: ${colorPalette.tertiary.dark};
  }
`;
