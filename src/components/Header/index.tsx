import React from "react";
import Authentication from "../../services/auth";
import authContext from "../../context/AuthenticationContext";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { AppHeader } from "./styles";

const Header: React.FC = () => {
  const [, setAuthenticationContext] = authContext.useAuthenticationContext();

  const handleLogout = () => {
    Authentication.logout();
    setAuthenticationContext({ token: null });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppHeader position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Enem Experience
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Sair
          </Button>
        </Toolbar>
      </AppHeader>
    </Box>
  );
};

export default Header;
