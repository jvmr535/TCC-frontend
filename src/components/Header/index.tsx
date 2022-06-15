import React from "react";
import { useNavigate } from "react-router";
import Authentication from "../../services/auth";
import authContext from "../../context/AuthenticationContext";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import StudentIcon from "../../assets/icons/StudentIcon";
import { colorPalette } from "../../styles/colorPalette";

import { AppHeader, Title } from "./styles";

const pages = ["Home", "Resultados", "Colabore"];

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [, setAuthenticationContext] = authContext.useAuthenticationContext();

  const handleLogout = () => {
    Authentication.logout();
    setAuthenticationContext({ token: null });
    navigate("/");
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
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button color="inherit" onClick={handleLogout}>
            Sair
          </Button>
        </Toolbar>
      </AppHeader>
    </Box>
  );
};

export default Header;
