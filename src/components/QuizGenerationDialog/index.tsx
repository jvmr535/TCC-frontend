import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { QuestionNumberDialog, DialogContainer } from "./styles";
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

  useEffect(() => {
    console.log(quizQuestionsAmountContextContext);
  }, [quizQuestionsAmountContextContext]);

  return (
    <div>
      <QuestionNumberDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContainer>
          <DialogTitle>Como você quer seu simulado?</DialogTitle>
          <DialogContent>
            <Subjects
              colorHex={colorPalette.tertiary.dark}
              width="100"
              height="100"
              isQuizGeneration={true}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </DialogContainer>
      </QuestionNumberDialog>
    </div>
  );
};

export default QuizGenerationDialog;
