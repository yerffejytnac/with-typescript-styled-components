import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  fontSizes: [10, 14, 16, 20, 24, 34, 48, 60, 96],
  fontWeights: [400, 500, 600],
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    heading: "Moderat, serif",
    monospace:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
};
