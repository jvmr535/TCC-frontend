import styled from "styled-components";
import { colorPalette } from "../../styles/colorPalette";

import { Container, Button } from "@mui/material/";

export const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 40px;
`;

export const OpenModalButton = styled(Button)`
  color: ${colorPalette.white};
  background-color: ${colorPalette.tertiary.natural};

  &:hover {
    background-color: ${colorPalette.tertiary.dark};
  }
`;
