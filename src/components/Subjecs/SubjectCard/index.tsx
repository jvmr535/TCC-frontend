import React, { useState, useEffect } from "react";
import { Typography, CircularProgress } from "@mui/material";
import { ISubjectCard } from "../../../interfaces";
import api from "../../../services/api";

import {
  SubjectCardContainer,
  SubjectCardHeader,
  SubjectButton,
  SubjectCardActions,
  SubjectCardContent,
  ExerciseAmount,
  ExerciseAmountCircularProgress,
} from "./styles";
import SubjectQuizGenerationCounter from "./SubjectQuizGenerationCounter";
import { toastNotificationError } from "../../../assets/ToastNotification";

const SubjectCard: React.FC<ISubjectCard> = ({
  subjectNameInPortuguese,
  subjectNameInEnglish,
  imageSource,
  isQuizGeneration,
  isQuizResults,
  isQuizDetails,
  minCardWidth,
  minCardHeight,
}) => {
  const [exerciseAmount, setExerciseAmount] = useState<number | null>(null);

  useEffect(() => {
    const getExerciseAmount = async () => {
      try {
        const response = await api.getExerciseAmount(subjectNameInEnglish);
        const { body } = response.data;
        setExerciseAmount(body);
      } catch (error) {}
    };
    getExerciseAmount();
  }, [exerciseAmount, subjectNameInEnglish]);

  const [quizzesResults, setQuizzesResults] = useState<any>();

  useEffect(() => {
    try {
      const getQuizzesResult = async () => {
        const response = await api.getQuizzesResult();
        const { body } = response.data;
        setQuizzesResults(body);
      };
      getQuizzesResult();
    } catch (error) {
      toastNotificationError("Erro ao obter resultados dos questionários");
    }
  }, []);

  const total = () => quizzesResults[subjectNameInEnglish].total;
  const rightAnswers = () => quizzesResults[subjectNameInEnglish].right;
  const hitRate = () => {
    const value = Math.round((rightAnswers() / total()) * 100);
    if (!value) {
      return null;
    }
    return value;
  };

  const quizGeneration = () => (
    <>
      <ExerciseAmount>
        Disponíveis:
        {exerciseAmount ? (
          exerciseAmount
        ) : (
          <ExerciseAmountCircularProgress variant="indeterminate" size={16} />
        )}
      </ExerciseAmount>
      <SubjectCardActions>
        <SubjectQuizGenerationCounter
          subjectNameInEnglish={subjectNameInEnglish}
        />
      </SubjectCardActions>
    </>
  );

  const quizDetails = () => (
    <SubjectCardActions>
      <SubjectButton size="small">Detalhes</SubjectButton>
    </SubjectCardActions>
  );

  const quizResults = () =>
    quizzesResults ? (
      <SubjectCardContent>
        {hitRate() ? (
          <>
            <Typography>{`Total: ${total()}`}</Typography>
            <Typography>{`Acertos: ${rightAnswers()} (${hitRate()}%)`}</Typography>
          </>
        ) : (
          <p>Nenhum exercício realizado</p>
        )}
      </SubjectCardContent>
    ) : (
      <ExerciseAmountCircularProgress size={16} />
    );
  return (
    <SubjectCardContainer
      minCardWidth={minCardWidth}
      minCardHeight={minCardHeight}
    >
      <SubjectCardHeader title={subjectNameInPortuguese} />
      <SubjectCardContent>{imageSource}</SubjectCardContent>
      {isQuizGeneration ? quizGeneration() : null}
      {isQuizDetails ? quizDetails() : null}
      {isQuizResults ? quizResults() : null}
    </SubjectCardContainer>
  );
};

export default SubjectCard;
