import styled from "styled-components";

import { Button, Container } from "@mui/material/";
import { colorPalette } from "../../styles/colorPalette";

export const HomeContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 70px;
  width: 100%;
`;

export const OpenModalButton = styled(Button)`
  color: ${colorPalette.secondary.dark};
  background-color: ${colorPalette.primary.natural};

  &:hover {
    background-color: ${colorPalette.primary.dark};
  }
`;
