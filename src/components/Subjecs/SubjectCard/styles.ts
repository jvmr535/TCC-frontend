import styled from "styled-components";
import { colorPalette } from "../../../styles/colorPalette";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
  Typography,
} from "@mui/material";

interface props {
  minCardWidth?: string;
  minCardHeight?: string;
}

export const SubjectCardContainer = styled(Card)<props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  width: 25px;
  min-width: ${(props) => props.minCardWidth};
  min-height: ${(props) => props.minCardHeight};
  padding: 5px;
  margin-bottom: 20px;
  background: white;
  background-color: ${colorPalette.secondary.natural};
`;

export const SubjectButton = styled(Button)`
  color: ${colorPalette.tertiary.dark};
`;

export const SubjectCardHeader = styled(CardHeader)`
  color: ${colorPalette.tertiary.dark};
`;

export const ExerciseAmount = styled(Typography)`
  color: ${colorPalette.primary.dark};
`;

export const SubjectCardActions = styled(CardActions)``;
export const SubjectCardContent = styled(CardContent)``;
