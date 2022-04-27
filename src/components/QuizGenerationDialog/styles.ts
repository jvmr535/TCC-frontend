import styled from "styled-components";
import { colorPalette } from "../../styles/colorPalette";

import { Dialog, DialogContent, Container } from "@mui/material";

export const QuestionNumberDialog = styled(Dialog)`
  background-color: ${colorPalette.primary.light};
`;

export const QuizDialogContent = styled(DialogContent)`
  color: ${colorPalette.primary.light};
`;

export const DialogContainer = styled(Container)`
  background-color: ${colorPalette.primary.dark};
`;
