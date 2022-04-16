import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalTheme from "../styles/global";

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
    <>
      <GlobalTheme />
      <BrowserRouter>
        {!auth.token ? routesWithAuth : routesWithoutAuth}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
