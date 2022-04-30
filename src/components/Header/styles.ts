import styled from "styled-components";
import { colorPalette } from "../../styles/colorPalette";

import { AppBar, Button, Typography, Container } from "@mui/material";

export const AppHeader = styled(AppBar)`
  background-color: ${colorPalette.secondary.natural};
  box-shadow: none;
  min-height: 80px;
  padding-top: 5px;
`;

export const OpenModalButton = styled(Button)`
  color: ${colorPalette.secondary.dark};
  background-color: ${colorPalette.primary.natural};

  &:hover {
    background-color: ${colorPalette.primary.dark};
  }
`;

export const Title = styled(Typography)`
  color: ${colorPalette.tertiary.dark};
`;

export const ButtonContainer = styled(Container)`
  padding: 10px 0 0 10px;
`;
