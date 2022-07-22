import { rgba } from "polished";

// Melhor até agora

export const colors = {
  primary: "#000000", // 3
  secondary: "#FFFFFF", // 4
  tertiary: "#000000", // 1
  quaternary: "#FFFFFF", // 2
  black: "#000000",
  white: "#FFFFFF",
  darkGray: "#454545",
  lightGray: "#999999",
};

export const colorPalette = {
  primary: {
    natural: rgba(colors.primary, 0.8),
    light: rgba(colors.primary, 0.4),
    dark: rgba(colors.primary, 1),
  },
  secondary: {
    natural: rgba(colors.secondary, 0.8),
    light: rgba(colors.secondary, 0.4),
    dark: rgba(colors.secondary, 1),
  },
  tertiary: {
    natural: rgba(colors.tertiary, 0.8),
    light: rgba(colors.tertiary, 0.4),
    dark: rgba(colors.tertiary, 1),
  },
  quaternary: {
    natural: rgba(colors.quaternary, 0.8),
    light: rgba(colors.quaternary, 0.4),
    dark: rgba(colors.quaternary, 1),
  },
  black: rgba(colors.black, 1),
  white: rgba(colors.white, 1),
  darkGray: rgba(colors.darkGray, 1),
  lightGray: rgba(colors.lightGray, 1),
};
