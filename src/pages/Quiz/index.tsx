import React, { useEffect, useState } from "react";
import { QuizContainer } from "./styles";

import api from "../../services/api";
import quizExercisesContext from "../../context/QuizExercisesContext";
import { Pagination, Stack } from "@mui/material";

interface IExercise{
  _id: string;
  reference: string;
  subject: string;
  exerciseFileToBas64: string;
  rightAnswer: string;
}

interface IQuizManagement{
  page: number;
  exercise: string;
  answer: string;
}

const Quiz: React.FC = () => {
  const [quizExercises] = quizExercisesContext.useQuizExercisesContext();
  const [page, setPage] = useState(1);
  const [exercise, setExercise] = useState<IExercise>({
    _id: '',
    reference: '',
    subject: '',
    exerciseFileToBas64: '',
    rightAnswer: ''
  })
  
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(()=> {
    const fetchExercise = async() => {
      const response = await api.getExercise(
        quizExercises[page - 1]
      );
      console.log(quizExercises[page - 1])
      console.log(response.body.exerciseFileToBas64)
      setExercise(response.body);
    }
    fetchExercise();
  },[page])

  return (
    <QuizContainer>
      <Stack spacing={2}>
        <img 
          src={`data:image/png;base64, ${exercise.exerciseFileToBas64}`} 
          alt="" />
        <Pagination 
          count={quizExercises.length} 
          page={page} color="primary" 
          onChange={handleChange}/>
      </Stack>
    </QuizContainer>
  );
};

export default Quiz;
