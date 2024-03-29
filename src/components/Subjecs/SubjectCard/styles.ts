import styled from "styled-components";
import { colorPalette } from "../../../styles/colorPalette";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
  Typography,
  CircularProgress,
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
  width: 20%;
  padding: 5px;
  margin: 30px;
  background: white;
  min-width: ${(props) => props.minCardWidth};
  min-height: ${(props) => props.minCardHeight};
  background-color: ${colorPalette.secondary.natural};
`;

export const SubjectButton = styled(Button)`
  color: ${colorPalette.tertiary.dark};
`;

export const SubjectCardHeader = styled(CardHeader)`
  color: ${colorPalette.tertiary.dark};
`;

export const ExerciseAmount = styled(Typography)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 4px;
  color: ${colorPalette.primary.dark};
`;

export const ExerciseAmountCircularProgress = styled(CircularProgress)`
  margin-left: 4px;
  color: black;
`;

export const SubjectCardActions = styled(CardActions)``;
export const SubjectCardContent = styled(CardContent)``;
