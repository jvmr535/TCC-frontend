import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
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
  isQuizResults,
  isQuizDetails,
  minCardWidth,
  minCardHeight,
  // subjectTotalAndRightQuestions,
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

  const [quizzesResults, setQuizzesResults] = useState<any>({
    english: {
      total: 0,
      right: 0,
    },
    spanish: {
      total: 0,
      right: 0,
    },
    portuguese: {
      total: 0,
      right: 0,
    },
    humanSciences: {
      total: 0,
      right: 0,
    },
    natureSciences: {
      total: 0,
      right: 0,
    },
    mathematics: {
      total: 0,
      right: 0,
    },
  });

  useEffect(() => {
    try {
      const getQuizzesResult = async () =>
        setQuizzesResults((await api.getQuizzesResult()).body);
      getQuizzesResult();
    } catch (error) {
      console.log(error);
    }
  }, [quizzesResults]);

  const total = quizzesResults[subjectNameInEnglish].total;
  const rightAnswers = quizzesResults[subjectNameInEnglish].right;
  const hitRate = Math.round((rightAnswers / total) * 100);

  return (
    <SubjectCardContainer
      minCardWidth={minCardWidth}
      minCardHeight={minCardHeight}
    >
      <SubjectCardHeader title={subjectNameInPortuguese} />
      <SubjectCardContent>{imageSource}</SubjectCardContent>
      {isQuizGeneration ? (
        <>
          <ExerciseAmount>Disponíveis: {exerciseAmount}</ExerciseAmount>
          <SubjectCardActions>
            <SubjectQuizGenerationCounter
              subjectNameInEnglish={subjectNameInEnglish}
            />
          </SubjectCardActions>
        </>
      ) : null}
      {isQuizDetails ? (
        <SubjectCardActions>
          <SubjectButton size="small">Detalhes</SubjectButton>
        </SubjectCardActions>
      ) : null}
      {isQuizResults ? (
        <SubjectCardContent>
          <Typography>{`Total: ${total}`}</Typography>
          <Typography>{`Acertos: ${rightAnswers} (${hitRate}%)`}</Typography>
        </SubjectCardContent>
      ) : null}
    </SubjectCardContainer>
  );
};

export default SubjectCard;
