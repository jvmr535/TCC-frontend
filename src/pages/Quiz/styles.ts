import styled from "styled-components";

import { Container } from "@mui/material/";

export const Image = styled.img`
  filter: invert(1);
`;

export const QuizContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
