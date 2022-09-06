import React, { useEffect, useState } from "react";
import { QuizContainer, Progress } from "./styles";

import api from "../../services/api";
import quizExercisesContext from "../../context/QuizExercisesContext";
import QuizImage from "../../components/QuizImage";
import QuizAnswers from "../../components/QuizAnswers";
import { IQuizAnswers } from "../../interfaces";

interface IExercise {
  _id: string;
  reference: string;
  subject: string;
  exerciseFileToBase64: string;
  rightAnswer: string;
}

const Quiz: React.FC = () => {
  const [quizExercises] = quizExercisesContext.useQuizExercisesContext();
  const [page, setPage] = useState(1);

  const INITIAL_STATE = {
    _id: "",
    reference: "",
    subject: "",
    exerciseFileToBase64: "",
    rightAnswer: "",
  };

  const [exercise, setExercise] = useState<IExercise>(INITIAL_STATE);
  const [quizAnswers, setQuizAnswers] = useState<Array<IQuizAnswers>>([]);

  const handleChange = (event: any, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchExercise = async () => {
      setExercise(INITIAL_STATE);
      const response = await api.getExercise(quizExercises[page - 1]);
      const { body } = response.data;

      setExercise(body);
      if (!quizAnswers.some((quizAnswer) => quizAnswer.exercise === body._id)) {
        setQuizAnswers([
          ...quizAnswers,
          {
            exercise: body._id,
            answer: "",
          },
        ]);
      }
    };
    fetchExercise();
  }, [page]);

  return (
    <QuizContainer>
      <Progress
        count={quizExercises.length}
        page={page}
        onChange={handleChange}
      />
      <QuizAnswers
        quizAnswers={quizAnswers}
        setQuizAnswers={setQuizAnswers}
        exerciseId={exercise._id}
        currentPage={page}
      />
      <QuizImage exerciseFileToBase64={exercise.exerciseFileToBase64} />
    </QuizContainer>
  );
};

export default Quiz;
