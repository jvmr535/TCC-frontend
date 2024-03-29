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
  max-width: 75%;
  border-style: groove;
  border-color: ${colorPalette.black};
  border-width: 2px;
`;
