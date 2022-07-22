import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { SubjectQuizGenerationCounterBox } from "./styles";

import { AddButton, RemoveButton } from "./styles";
import quizQuestionsAmountContext from "../../../../context/QuizQuestionsAmountContext";
import { Typography } from "@mui/material";

interface ISubjectQuizGenerationCounter {
  subjectNameInEnglish: string;
}

const SubjectQuizGenerationCounter: React.FC<ISubjectQuizGenerationCounter> = ({
  subjectNameInEnglish,
}) => {
  const [
    quizQuestionsAmountContextContext,
    setQuizQuestionsAmountContextContext,
  ] = quizQuestionsAmountContext.useQuizQuestionsAmountContext();

  const handleClick = (isAdd: boolean) => {
    setQuizQuestionsAmountContextContext({
      ...quizQuestionsAmountContextContext,
      [subjectNameInEnglish]: isAdd
        ? quizQuestionsAmountContextContext[subjectNameInEnglish] + 1
        : quizQuestionsAmountContextContext[subjectNameInEnglish] - 1,
    });
  };

  return (
    <SubjectQuizGenerationCounterBox>
      <ButtonGroup>
        <RemoveButton onClick={() => handleClick(false)}>
          <RemoveIcon fontSize="small" />
        </RemoveButton>
      </ButtonGroup>
      <Typography>
        {quizQuestionsAmountContextContext[subjectNameInEnglish]}
      </Typography>
      <ButtonGroup>
        <AddButton onClick={() => handleClick(true)}>
          <AddIcon fontSize="small" />
        </AddButton>
      </ButtonGroup>
    </SubjectQuizGenerationCounterBox>
  );
};

export default SubjectQuizGenerationCounter;
