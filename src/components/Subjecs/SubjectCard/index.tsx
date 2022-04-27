import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import quizQuestionsAmountContext from "../../../context/QuizQuestionsAmountContext";
import api from "../../../services/api";

import {
  SubjectCardContainer,
  SubjectCardHeader,
  SubjectButton,
  SubjectCardActions,
  SubjectCardContent,
} from "./styles";

export interface ISubjectCard {
  subjectNameInPortuguese: string;
  subjectNameInEnglish: string;
  imageSource: React.ReactNode;
  isQuizGeneration?: boolean;
}

const SubjectCard: React.FC<ISubjectCard> = ({
  subjectNameInPortuguese,
  subjectNameInEnglish,
  imageSource,
  isQuizGeneration,
}) => {
  const [exerciseAmount, setExerciseAmount] = useState<number | null>(null);

  const [
    quizQuestionsAmountContextContext,
    setQuizQuestionsAmountContextContext,
  ] = quizQuestionsAmountContext.useQuizQuestionsAmountContext();

  useEffect(() => {
    console.log(quizQuestionsAmountContextContext);
  }, [quizQuestionsAmountContextContext]);

  useEffect(() => {
    const getExerciseAmount = async () => {
      try {
        const response = await api.getExerciseAmount(subjectNameInEnglish);
        setExerciseAmount(response.body);
      } catch (error) {
        console.log(error);
      }
    };
    getExerciseAmount();
  }, [exerciseAmount, subjectNameInEnglish]);

  const handleClick = () => {
    setQuizQuestionsAmountContextContext({
      ...quizQuestionsAmountContextContext,
      [subjectNameInEnglish]:
        quizQuestionsAmountContextContext[subjectNameInEnglish] + 1,
    });
  };

  return (
    <SubjectCardContainer>
      <SubjectCardHeader title={subjectNameInPortuguese} />
      <SubjectCardContent>{imageSource}</SubjectCardContent>
      <SubjectCardActions>
        {!isQuizGeneration ? (
          <SubjectButton size="small">Detalhes</SubjectButton>
        ) : (
          <Button onClick={handleClick}>Adicionar</Button>
        )}
      </SubjectCardActions>
    </SubjectCardContainer>
  );
};

export default SubjectCard;
