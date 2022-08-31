import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QuizImage from "../../components/QuizImage";
import api from "../../services/api";

import {
  QuizReviewContainer,
  Progress,
  Image,
  RightAnswer,
  WrongAnswer,
} from "./styles";

const QuizReview: React.FC = () => {
  const { state } = useLocation();
  const { quiz } = state;
  const [quizAnswers, setQuizAnswers] = useState<Array<any>>([]);
  const [image, setImage] = useState<string>("");
  const [userAnswers, setUserAnswers] = useState<any>({
    userAnswer: "",
    rightAnswer: "",
  });
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const getQuizReview = async () => {
      const response = await api.getQuizReview(quiz);
      const { body } = response.data;
      setQuizAnswers(body.answers);
    };
    getQuizReview();
  }, []);

  useEffect(() => {
    const getExercise = async () => {
      if (quizAnswers[page - 1] !== undefined) {
        const response = await api.getExercise(quizAnswers[page - 1]._id);

        const { body } = response.data;
        setImage(body.exerciseFileToBase64);
        setUserAnswers({
          userAnswer: quizAnswers[page - 1].userAnswer,
          rightAnswer: quizAnswers[page - 1].rightAnswer,
        });
      }
    };
    getExercise();
  }, [quizAnswers, page]);

  return (
    <QuizReviewContainer>
      <Progress
        count={quizAnswers.length}
        page={page}
        onChange={handleChange}
      />
      {userAnswers.rightAnswer === userAnswers.userAnswer ? (
        <>
          <RightAnswer>{`Alternativa correta: ${userAnswers.rightAnswer}`}</RightAnswer>
          <RightAnswer>{`Sua resposta: ${userAnswers.userAnswer}`}</RightAnswer>
        </>
      ) : (
        <>
          <WrongAnswer>{`Alternativa correta: ${userAnswers.rightAnswer}`}</WrongAnswer>
          <WrongAnswer>{`Sua resposta: ${userAnswers.userAnswer}`}</WrongAnswer>
        </>
      )}
      <div style={{ marginTop: "20px" }} />
      <QuizImage exerciseFileToBase64={image} />
    </QuizReviewContainer>
  );
};

export default QuizReview;
