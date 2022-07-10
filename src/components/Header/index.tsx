import React from "react";
import { useNavigate } from "react-router";
import Authentication from "../../services/auth";
import authContext from "../../context/AuthenticationContext";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import StudentIcon from "../../assets/icons/StudentIcon";
import { colorPalette } from "../../styles/colorPalette";

import { AppHeader, Title, LogOutButton, OptionsHeaderButton } from "./styles";

const pages = [
  { title: "Home", path: "/" },
  { title: "Resultados", path: "/results" },
  { title: "Colabore", path: "/colaborate" },
];

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [, setAuthenticationContext] = authContext.useAuthenticationContext();

  const handleLogout = () => {
    Authentication.logout();
    setAuthenticationContext({ token: null });
    navigate("/");
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Box>
      <AppHeader position="static">
        <Toolbar>
          <StudentIcon
            colorHex={colorPalette.tertiary.dark}
            width={"50"}
            height={"50"}
          />
          <div style={{ padding: "15px" }}></div>
          <Title variant="h6" sx={{ flexGrow: 1, width: "0px" }}>
            Enem Experience
          </Title>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <LogOutButton
                key={page.title}
                onClick={() => handleNavigate(page.path)}
              >
                {page.title}
              </LogOutButton>
            ))}
          </Box>
          <OptionsHeaderButton color="inherit" onClick={handleLogout}>
            Sair
          </OptionsHeaderButton>
        </Toolbar>
      </AppHeader>
    </Box>
  );
};

export default Header;
