import React from "react";

import { QuizzesNotFoundContainer } from "./styles";

const QuizzesNotFound: React.FC = () => {
  return (
    <QuizzesNotFoundContainer>
      <h1>Nenhum questionário foi encontrado :(</h1>
    </QuizzesNotFoundContainer>
  );
};

export default QuizzesNotFound;
