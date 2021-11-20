import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Header from "../components/Header";
import authContext from "../context/AuthenticationContext";

const AppRoutes: React.FC = () => {
  const [auth] = authContext.useAuthenticationContext();

  const routesWithAuth = (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </>
  );

  const routesWithoutAuth = (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {!auth.token ? routesWithAuth : routesWithoutAuth}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRoutes;
