import styled from "styled-components";
import { colorPalette } from "../../styles/colorPalette";

import { AppBar, Button, Typography, Container } from "@mui/material";

export const AppHeader = styled(AppBar)`
  background-color: ${colorPalette.primary.natural};
  box-shadow: none;
`;

export const OpenModalButton = styled(Button)`
  color: ${colorPalette.white};
  background-color: ${colorPalette.tertiary.dark};

  &:hover {
    background-color: ${colorPalette.tertiary.dark};
  }
`;

export const Title = styled(Typography)`
  color: ${colorPalette.quaternary.dark};
`;

export const ButtonContainer = styled(Container)`
  padding: 10px 0 0 10px;
`;
