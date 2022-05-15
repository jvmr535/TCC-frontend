import React, { useEffect, useState } from "react";
import { Image } from "./styles";

import quizExercisesContext from "../../context/QuizExercisesContext";

import { QuizContainer } from "./styles";
import { Pagination } from "@mui/material";

const Quiz: React.FC = () => {
  const [quizExercises] = quizExercisesContext.useQuizExercisesContext();

  const [quiz, setQuiz] = useState<any[]>([]);

  const [pagination, setPagination] = useState({
    currentPage: 0,
    totalPages: 1,
  });
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPagination({ ...pagination, currentPage: value });
  };

  useEffect(() => {
    quizExercises.forEach((exercise: any) => {
      setQuiz((oldArray) => [
        ...oldArray,
        { ...exercise, answer: "", isResolved: true },
      ]);
    });
    console.log(quiz);
  }, []);

  return (
    <QuizContainer>
      {/* {quiz.map((exercise) => ( */}
      {/* <Image
        src={`data:image/png;base64, ${quiz[1].exerciseFileToBas64}`}
        alt="Red dot"
      /> */}
      {/* ))} */}
      <Pagination
        count={pagination.totalPages}
        page={pagination.currentPage}
        onChange={handleChange}
      />
    </QuizContainer>
  );
};

export default Quiz;
