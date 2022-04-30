import React from "react";
import Subjects from "../../components/Subjecs";
import { colorPalette } from "../../styles/colorPalette";

import { HomeContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Subjects
        colorHex={colorPalette.tertiary.dark}
        width="100px"
        height="100px"
        isQuizGeneration={false}
        minCardHeight="17vh"
        minCardWidth="17vw"
      />
    </HomeContainer>
  );
};

export default Home;
