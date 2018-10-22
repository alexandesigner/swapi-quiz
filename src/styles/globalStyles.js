/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=K2D');
  * {
    outline: none;
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'K2D', sans-serif;
    background: #414141;
  }
`;