import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import quizQuestionsAmountContext from "../../../context/QuizQuestionsAmountContext";
import { ISubjectCard } from "../../../interfaces";
import api from "../../../services/api";

import {
  SubjectCardContainer,
  SubjectCardHeader,
  SubjectButton,
  SubjectCardActions,
  SubjectCardContent,
  ExerciseAmount,
} from "./styles";
import SubjectQuizGenerationCounter from "./SubjectQuizGenerationCounter";

const SubjectCard: React.FC<ISubjectCard> = ({
  subjectNameInPortuguese,
  subjectNameInEnglish,
  imageSource,
  isQuizGeneration,
  minCardWidth,
  minCardHeight,
}) => {
  const [exerciseAmount, setExerciseAmount] = useState<number | null>(null);

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

  return (
    <SubjectCardContainer
      minCardWidth={minCardWidth}
      minCardHeight={minCardHeight}
    >
      <SubjectCardHeader title={subjectNameInPortuguese} />
      {isQuizGeneration ? (
        <ExerciseAmount>Disponíveis: {exerciseAmount}</ExerciseAmount>
      ) : null}
      <SubjectCardContent>{imageSource}</SubjectCardContent>
      <SubjectCardActions>
        {!isQuizGeneration ? (
          <SubjectButton size="small">Detalhes</SubjectButton>
        ) : (
          <SubjectQuizGenerationCounter
            subjectNameInEnglish={subjectNameInEnglish}
          />
        )}
      </SubjectCardActions>
    </SubjectCardContainer>
  );
};

export default SubjectCard;
