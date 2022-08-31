import React, { useCallback, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IQuizAnswers } from "../../interfaces";

import { QuizFormControl, SubmitQuizButton } from "./styles";
import api from "../../services/api";
import { useNavigate } from "react-router";
import {
  toastNotificationError,
  toastNotificationSuccess,
} from "../../assets/ToastNotification";

interface IAnswerSetter {
  quizAnswers: Array<IQuizAnswers>;
  setQuizAnswers: Function;
  exerciseId: string;
  currentPage: number;
}

const QuizAnswers: React.FC<IAnswerSetter> = ({
  quizAnswers,
  setQuizAnswers,
  exerciseId,
  currentPage,
}) => {
  const navigate = useNavigate();
  const [change, setChange] = useState<boolean>(false);

  const handleChange = useCallback(
    (event: any) => {
      const index = quizAnswers
        .map((quizAnswer) => quizAnswer.exercise)
        .indexOf(exerciseId);
      quizAnswers[index].answer = event.target.value;
      setQuizAnswers([...quizAnswers]);
      setChange(!change);
    },
    [quizAnswers, exerciseId, setQuizAnswers]
  );

  const quizCorrection = useCallback(async () => {
    try {
      await api.quizCorrection(quizAnswers);
      toastNotificationSuccess(
        "Suas respostas foram enviadas, por favor verifique sua aba de resultados!"
      );
      navigate("/results");
    } catch (error) {
      toastNotificationError("Erro ao corrigir questionário");
    }
  }, [quizAnswers, navigate]);

  const renderOptions = useCallback(() => {
    return (
      <QuizFormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel value="A" control={<Radio />} label="A" />
          <FormControlLabel value="B" control={<Radio />} label="B" />
          <FormControlLabel value="C" control={<Radio />} label="C" />
          <FormControlLabel value="D" control={<Radio />} label="D" />
          <FormControlLabel value="E" control={<Radio />} label="E" />
        </RadioGroup>
        <SubmitQuizButton variant="outlined" onClick={quizCorrection}>
          Submeter questionário
        </SubmitQuizButton>
      </QuizFormControl>
    );
  }, [handleChange, quizCorrection, change]);

  return renderOptions();
};

export default QuizAnswers;
