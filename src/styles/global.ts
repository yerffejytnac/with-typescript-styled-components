import { createGlobalStyle } from "styled-components";

import fonts from "./fonts";
import reset from "./reset";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  ${reset};

  :root {
    text-size-adjust: none;
    box-sizing: border-box;
    
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }
  @font-face {
    font-family: Moderat;
    src: url(${fonts.ModeratRegularWoff2}) format("woff2"),
      url(${fonts.ModeratRegularWoff}) format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: Moderat;
    src: url(${fonts.ModeratMediumWoff2}) format("woff2"),
      url(${fonts.ModeratMediumWoff}) format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: Moderat;
    src: url(${fonts.ModeratBoldWoff2}) format("woff2"),
      url(${fonts.ModeratBoldWoff}) format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }    

  body {
    font-size: ${theme.fontSizes[3]}px;
    line-height: 1.3;
    font-family: ${theme.fonts.body};
    text-size-adjust: 100%;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  pre {
    font-family: ${theme.fonts.monospace};
    font-size: ${theme.fontSizes[0]}px;
    max-width: 100%;
    height: 25vh;
    overflow: auto;
    padding: ${theme.space[2]}px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
  }

  svg {
    fill: currentColor;
    pointer-events: none;
  }
`;
