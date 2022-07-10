import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IQuizAnswers } from "../../interfaces";

import { QuizFormControl, SubmitQuizButton } from "./styles";
import api from "../../services/api";

interface IAnswerSetter {
  quizAnswers: Array<IQuizAnswers>;
  setQuizAnswers: Function;
  exerciseId: string;
  page: number;
}

const QuizAnswers: React.FC<IAnswerSetter> = ({
  quizAnswers,
  setQuizAnswers,
  exerciseId,
  page,
}) => {
  const handleChange = (event: any) => {
    const index = quizAnswers
      .map((quizAnswer) => quizAnswer.exercise)
      .indexOf(exerciseId);
    quizAnswers[index].answer = event.target.value;
    setQuizAnswers([...quizAnswers]);
    console.log(quizAnswers);
  };

  const quizCorrection = async () => {
    try {
      console.log("quizAnswers", quizAnswers);
      const response = await api.quizCorrection(quizAnswers);
      console.log(response.message);
    } catch (error) {
      console.log(error);
    }
  };

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
};

export default QuizAnswers;
