import React, { useState, useEffect } from "react";
import api from "../../services/api";
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
        // quizzesResults={quizzesResults}
      />
    </ResultsContainer>
  );
};

export default ResultsCards;
