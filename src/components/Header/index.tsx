import React, { useState } from "react";
import Authentication from "../../services/auth";
import authContext from "../../context/AuthenticationContext";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { AppHeader, OpenModalButton, Title } from "./styles";
import StudentIcon from "../../assets/icons/StudentIcon";
import { colorPalette } from "../../styles/colorPalette";
import QuizGenerationDialog from "../QuizGenerationDialog";
import quizQuestionsAmountContext from "../../context/QuizQuestionsAmountContext";

const pages = ["Home", "Resultados", "Colabore"];

const Header: React.FC = () => {
  const [, setAuthenticationContext] = authContext.useAuthenticationContext();

  const [openQuizGenerationDialog, setOpenQuizGenerationDialog] =
    useState<boolean>(false);

  const handleLogout = () => {
    Authentication.logout();
    setAuthenticationContext({ token: null });
  };

  const handleOpenQuizGenerationDialog = () => {
    setOpenQuizGenerationDialog(true);
  };

  return (
    <quizQuestionsAmountContext.QuizQuestionsAmountContext>
      <QuizGenerationDialog
        open={openQuizGenerationDialog}
        setOpen={setOpenQuizGenerationDialog}
      />
      <Box>
        <AppHeader position="static">
          <Toolbar>
            <StudentIcon
              colorHex={colorPalette.tertiary.dark}
              width={"50"}
              height={"50"}
            />
            <div style={{ paddingLeft: "20px" }}></div>
            <Title variant="h6" sx={{ flexGrow: 1 }}>
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
            <OpenModalButton onClick={handleOpenQuizGenerationDialog}>
              Gerar simulado
            </OpenModalButton>
            <Button color="inherit" onClick={handleLogout}>
              Sair
            </Button>
          </Toolbar>
        </AppHeader>
      </Box>
    </quizQuestionsAmountContext.QuizQuestionsAmountContext>
  );
};

export default Header;
