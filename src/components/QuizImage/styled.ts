import styled from "styled-components";

import { Container } from "@mui/material/";
import { colorPalette } from "../../styles/colorPalette";

export const QuizImageWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  border-style: groove;
  border-color: ${colorPalette.secondary.natural};
  border-width: 1px;
`;
