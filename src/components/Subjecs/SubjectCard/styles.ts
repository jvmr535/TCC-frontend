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
  justify-content: space-evenly;
  /* width: 45%; */
  min-width: 345px;
  min-height: 245px;
  padding: 10px;
  margin-bottom: 40px;
  background: white;
  background-color: ${colorPalette.quaternary.dark};

  &:hover {
    background-color: ${colorPalette.quaternary.dark};
  }
`;

export const SubjectButton = styled(Button)`
  color: ${colorPalette.tertiary.dark};
`;

export const SubjectCardActions = styled(CardActions)``;
export const SubjectCardContent = styled(CardContent)``;
export const SubjectCardHeader = styled(CardHeader)``;
