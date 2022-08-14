import styled from "styled-components";
import { colorPalette } from "../../styles/colorPalette";

import { FormControl, Button } from "@mui/material";

export const QuizFormControl = styled(FormControl)`
  display: flex;
  align-items: center;
  padding-top: 30px;
`;

export const SubmitQuizButton = styled(Button)`
  margin-top: 4px;
  color: ${colorPalette.primary.dark};
  border-color: ${colorPalette.primary.dark};

  &:hover {
    color: ${colorPalette.tertiary.dark};
  }
`;
