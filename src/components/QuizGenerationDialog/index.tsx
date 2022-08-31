import React from "react";
import { useNavigate } from "react-router-dom";
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
import quizExercisesContext from "../../context/QuizExercisesContext";
import { toastNotificationError } from "../../assets/ToastNotification";

interface IQuizGenerationDialog {
  open: boolean;
  setOpen: Function;
}

const QuizGenerationDialog: React.FC<IQuizGenerationDialog> = ({
  open,
  setOpen,
}) => {
  const navigate = useNavigate();

  const [, setQuizExercises] = quizExercisesContext.useQuizExercisesContext();

  const handleClose = () => {
    setOpen(false);
  };

  const [quizQuestionsAmount] =
    quizQuestionsAmountContext.useQuizQuestionsAmountContext();

  const handleGenerateQuiz = async () => {
    try {
      const response = await api.getGenerateQuiz(quizQuestionsAmount);
      const { body } = response.data;

      setQuizExercises(body);

      navigate("/quiz");
      setOpen(false);
    } catch (error) {
      toastNotificationError("Erro ao gerar questionário");
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
            isQuizGeneration
            minCardHeight="5vh"
            minCardWidth="10vw"
          />
        </DialogContent>
        <DialogActions>
          <GenerateQuizButton
            variant="contained"
            onClick={() => handleGenerateQuiz()}
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
