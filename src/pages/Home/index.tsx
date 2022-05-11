import React, { useState } from "react";
import { useNavigate } from "react-router";
import { OpenModalButton } from "../../components/Header/styles";
import QuizGenerationDialog from "../../components/QuizGenerationDialog";
import Subjects from "../../components/Subjecs";
import quizQuestionsAmountContext from "../../context/QuizQuestionsAmountContext";
import { colorPalette } from "../../styles/colorPalette";

import { HomeContainer } from "./styles";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [openQuizGenerationDialog, setOpenQuizGenerationDialog] =
    useState<boolean>(false);

  const handleOpenQuizGenerationDialog = () => {
    setOpenQuizGenerationDialog(true);
  };

  return (
    <quizQuestionsAmountContext.QuizQuestionsAmountContext>
      <QuizGenerationDialog
        open={openQuizGenerationDialog}
        setOpen={setOpenQuizGenerationDialog}
      />
      <HomeContainer>
        <OpenModalButton onClick={handleOpenQuizGenerationDialog}>
          Gerar simulado
        </OpenModalButton>
        <Subjects
          colorHex={colorPalette.tertiary.dark}
          width="100px"
          height="100px"
          isQuizGeneration={false}
          minCardHeight="17vh"
          minCardWidth="17vw"
        />
      </HomeContainer>
    </quizQuestionsAmountContext.QuizQuestionsAmountContext>

  );
};

export default Home;
