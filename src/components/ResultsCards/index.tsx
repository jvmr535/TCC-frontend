import React from "react";
import { colorPalette } from "../../styles/colorPalette";
import Subjects from "../Subjecs";

import { ResultsContainer } from "./styles";

const ResultsCards: React.FC = () => {
  return (
    <ResultsContainer>
      <Subjects
        colorHex={colorPalette.primary.dark}
        width="100px"
        height="100px"
        isQuizResults
        minCardHeight="5vh"
        minCardWidth="9vw"
      />
    </ResultsContainer>
  );
};

export default ResultsCards;
