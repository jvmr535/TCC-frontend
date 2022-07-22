import React from "react";
import QuizzesTable from "../../components/QuizzesTable";
import ResultsCards from "../../components/ResultsCards";

import { ResultsContainer } from "./styles";

const Results: React.FC = () => {
  return (
    <ResultsContainer>
      <ResultsCards />
      <QuizzesTable />
    </ResultsContainer>
  );
};

export default Results;
