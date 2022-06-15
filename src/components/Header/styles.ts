import styled from "styled-components";
import { colorPalette } from "../../styles/colorPalette";

import { AppBar, Typography, Container } from "@mui/material";

export const AppHeader = styled(AppBar)`
  background-color: ${colorPalette.secondary.natural};
  box-shadow: none;
  min-height: 80px;
  padding-top: 5px;
`;

export const Title = styled(Typography)`
  color: ${colorPalette.tertiary.dark};
`;

export const ButtonContainer = styled(Container)`
  padding: 10px 0 0 10px;
`;
