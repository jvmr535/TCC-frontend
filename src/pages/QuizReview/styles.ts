import styled from "styled-components";

import { Container, Pagination, Typography } from "@mui/material/";
import { colorPalette } from "../../styles/colorPalette";

export const Image = styled.img`
  /* filter: invert(1); */
  margin-top: 20px;
  border-style: groove;
  border-color: ${colorPalette.secondary.natural};
  border-width: 1px;
`;

export const QuizReviewContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Progress = styled(Pagination)`
  margin: 20px 0 20px 0;
`;

export const RightAnswer = styled(Typography)`
  color: green;
`;

export const WrongAnswer = styled(Typography)`
  color: red;
`;
