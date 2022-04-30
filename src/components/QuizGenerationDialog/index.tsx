import React, { useEffect } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import api from "../../services/api";
import {
  QuestionNumberDialog,
  DialogContainer,
  Title,
  GenerateQuizButton,
} from "./styles";
import { colorPalette } from "../../styles/colorPalette";
import Subjects from "../Subjecs";
import quizQuestionsAmountContext from "../../context/QuizQuestionsAmountContext";

interface IQuizGenerationDialog {
  open: boolean;
  setOpen: Function;
}

const QuizGenerationDialog: React.FC<IQuizGenerationDialog> = ({
  open,
  setOpen,
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [quizQuestionsAmountContextContext] =
    quizQuestionsAmountContext.useQuizQuestionsAmountContext();

  const handleGenerateQuiz = async () => {
    try {
      const response = await api.getGenerateQuiz(
        quizQuestionsAmountContextContext
      );
      setOpen(false);
    } catch (error) {
      console.log("Deu errado!");
    }
  };

  return (
    <QuestionNumberDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="md"
      scroll="paper"
    >
      <DialogContainer>
        <Title>Escolha o número de exercícios por conteúdo</Title>
        <DialogContent>
          <Subjects
            colorHex={colorPalette.tertiary.dark}
            width="100px"
            height="100px"
            minCardHeight="5vh"
            minCardWidth="10vw"
            isQuizGeneration={true}
          />
        </DialogContent>
        <DialogActions>
          <GenerateQuizButton
            variant="contained"
            onClick={handleGenerateQuiz}
            autoFocus
          >
            Continuar
          </GenerateQuizButton>
        </DialogActions>
      </DialogContainer>
    </QuestionNumberDialog>
  );
};

export default QuizGenerationDialog;
