import { CircularProgress } from "@mui/material";
import React from "react";
import { Image, QuizImageWrapper } from "./styled";

interface IQuizImage {
  exerciseFileToBase64: string;
}

const QuizImage: React.FC<IQuizImage> = ({ exerciseFileToBase64 }) => {
  return (
    <QuizImageWrapper>
      {!exerciseFileToBase64 ? (
        <CircularProgress />
      ) : (
        <Image src={`data:image/png;base64, ${exerciseFileToBase64}`} alt="" />
      )}
    </QuizImageWrapper>
  );
};

export default QuizImage;
