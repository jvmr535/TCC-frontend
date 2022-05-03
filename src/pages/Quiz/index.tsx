import React, { useEffect } from "react";
import { Image } from "./styles";

import { Container } from "@mui/material/";
import quizExercisesContext from "../../context/QuizExercisesContext";

const Quiz: React.FC = () => {
  const [quizExercises] = quizExercisesContext.useQuizExercisesContext();

  useEffect(() => {
    console.log(quizExercises);
  }, [quizExercises]);

  return (
    <Container>
      <Image
        src={`data:image/png;base64, ${quizExercises[0][0].exerciseFileToBas64}`}
        alt="Red dot"
      />
    </Container>
  );
};

export default Quiz;
