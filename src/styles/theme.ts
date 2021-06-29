import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  fontSizes: [10, 12, 14, 16, 20, 24, 34, 48, 60, 96],
  fontWeights: [400, 500, 600],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    heading: "Moderat, serif",
    monospace:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
};
