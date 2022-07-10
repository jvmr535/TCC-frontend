import styled from "styled-components";
import { colorPalette } from "../../styles/colorPalette";

import {
  Dialog,
  DialogContent,
  Container,
  DialogTitle,
  Button,
} from "@mui/material";

export const QuestionNumberDialog = styled(Dialog)`
  background-color: ${colorPalette.primary.light};
`;

export const QuizDialogContent = styled(DialogContent)`
  color: ${colorPalette.primary.dark};
`;

export const DialogContainer = styled(Container)`
  background-color: ${colorPalette.tertiary.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(DialogTitle)`
  color: ${colorPalette.secondary.dark};
`;

export const GenerateQuizButton = styled(Button)`
  color: ${colorPalette.secondary.dark};
  background-color: ${colorPalette.primary.light};
  margin-bottom: 15px;

  &:hover {
    background-color: ${colorPalette.primary.dark};
  }
`;
