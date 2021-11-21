import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: 40,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "spaceEvenly",
          width: "45%",
          minWidth: 345,
          minHeight: 245,
          padding: 10,
          marginBottom: 40,
          background: "white",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#0f0f0f",
      dark: "#0039AB",
    },
    secondary: {
      main: "#F5A900",
      dark: "#A87400",
    },
  },
});

export default theme;
