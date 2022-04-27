import styled from "styled-components";
import { colorPalette } from "../../../styles/colorPalette";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
} from "@mui/material";

export const SubjectCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  width: 25%;
  min-width: 20vw;
  min-height: 20vh;
  padding: 5px;
  margin-bottom: 20px;
  background: white;
  background-color: ${colorPalette.quaternary.dark};

  &:hover {
    background-color: ${colorPalette.quaternary.dark};
  }
`;

export const SubjectButton = styled(Button)`
  color: ${colorPalette.primary.dark};
`;

export const SubjectCardHeader = styled(CardHeader)`
  color: ${colorPalette.primary.dark};
`;

export const SubjectCardActions = styled(CardActions)``;
export const SubjectCardContent = styled(CardContent)``;
