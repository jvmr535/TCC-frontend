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
  const [exercise, setExercise] = useState<IExercise>({
    _id: "",
    reference: "",
    subject: "",
    exerciseFileToBase64: "",
    rightAnswer: "",
  });
  const [quizAnswers, setQuizAnswers] = useState<Array<IQuizAnswers>>([]);

  const handleChange = (event: any, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchExercise = async () => {
      const response = await api.getExercise(quizExercises[page - 1]);
      setExercise(response.body);
      if (
        !quizAnswers.some(
          (quizAnswer) => quizAnswer.exercise === response.body._id
        )
      ) {
        setQuizAnswers([
          ...quizAnswers,
          {
            exercise: response.body._id,
            answer: "",
          },
        ]);
      }
      console.log(quizAnswers);
    };
    fetchExercise();
  }, [page]);

  return (
    <QuizContainer>
      <Progress
        count={quizExercises.length}
        page={page}
        color="primary"
        onChange={handleChange}
      />
      <QuizImage exerciseFileToBase64={exercise.exerciseFileToBase64} />
      <QuizAnswers
        quizAnswers={quizAnswers}
        setQuizAnswers={setQuizAnswers}
        exerciseId={exercise._id}
        page={page}
      />
    </QuizContainer>
  );
};

export default Quiz;
