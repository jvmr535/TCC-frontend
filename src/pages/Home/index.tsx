import React, { useState } from "react";
import QuizGenerationDialog from "../../components/QuizGenerationDialog";
import Subjects from "../../components/Subjecs";
import quizQuestionsAmountContext from "../../context/QuizQuestionsAmountContext";
import { colorPalette } from "../../styles/colorPalette";

import { HomeContainer, OpenModalButton } from "./styles";

const Home: React.FC = () => {
  const [openQuizGenerationDialog, setOpenQuizGenerationDialog] =
    useState<boolean>(false);

  const [isRanked, setIsRanked] = useState<boolean>(false);

  const handleOpenQuizGenerationDialog = () => {
    setOpenQuizGenerationDialog(true);
  };

  return (
    <quizQuestionsAmountContext.QuizQuestionsAmountContext>
      <QuizGenerationDialog
        open={openQuizGenerationDialog}
        setOpen={setOpenQuizGenerationDialog}
        isRanked={isRanked}
      />
      <HomeContainer>
        <OpenModalButton
          onClick={() => {
            handleOpenQuizGenerationDialog();
            setIsRanked(false);
          }}
        >
          Gerar simulado
        </OpenModalButton>
        <OpenModalButton
          onClick={() => {
            handleOpenQuizGenerationDialog();
            setIsRanked(true);
          }}
        >
          Gerar simulado ranqueado
        </OpenModalButton>
        <Subjects
          colorHex={colorPalette.tertiary.dark}
          width="100px"
          height="100px"
          isQuizDetails
          minCardHeight="5vh"
          minCardWidth="10vw"
        />
      </HomeContainer>
    </quizQuestionsAmountContext.QuizQuestionsAmountContext>
  );
};

export default Home;
