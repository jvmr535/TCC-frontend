import React from "react";
import Subjects from "../../components/Subjecs";
import { colorPalette } from "../../styles/colorPalette";

import { HomeContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Subjects
        colorHex={colorPalette.tertiary.dark}
        width="100"
        height="100"
        isQuizGeneration={false}
      />
    </HomeContainer>
  );
};

export default Home;
