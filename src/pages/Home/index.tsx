import React from "react";
import Subjects from "../../components/Subjecs";
import { colorPalette } from "../../styles/colorPalette";

import { HomeContainer, OpenModalButton } from "./styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <OpenModalButton>Gerar simulado</OpenModalButton>
      <Subjects
        colorHex={colorPalette.primary.natural}
        width="100"
        height="100"
      />
    </HomeContainer>
  );
};

export default Home;
