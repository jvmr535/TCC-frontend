import styled from "styled-components";

import { Container, Pagination } from "@mui/material/";

export const Image = styled.img`
  filter: invert(1);
`;

export const QuizContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Progress = styled(Pagination)`
  margin: 20px 0 20px 0;
`;
