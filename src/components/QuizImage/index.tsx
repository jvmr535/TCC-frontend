import React from "react";
import { QuizImageWrapper } from "./styled"

interface IQuizImage {
  exerciseFileToBase64: string
}

const QuizImage: React.FC<IQuizImage> = ({exerciseFileToBase64}) => {
  return (
    <QuizImageWrapper>
      <img src={`data:image/png;base64, ${exerciseFileToBase64}`} alt="" />
    </QuizImageWrapper>
  )
} 

export default QuizImage;