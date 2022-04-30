import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

import styled from "styled-components";
import { colorPalette } from "../../../../styles/colorPalette";

export const SubjectQuizGenerationCounterBox = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-bottom: 2px;
  margin-right: 4px;
  /* align-items: center; */
`;

export const AddButton = styled(Button)`
  width: 20px;
  height: 23px;
  margin-left: 8px;
  color: ${colorPalette.tertiary.natural};
  border-color: ${colorPalette.tertiary.natural};

  &:hover {
    color: ${colorPalette.tertiary.dark};
    border-color: ${colorPalette.tertiary.dark};
  }
`;

export const RemoveButton = styled(Button)`
  width: 20px;
  height: 23px;
  margin-right: 8px;
  color: ${colorPalette.tertiary.natural};
  border-color: ${colorPalette.tertiary.natural};

  &:hover {
    color: ${colorPalette.tertiary.dark};
    border-color: ${colorPalette.tertiary.dark};
  }
`;

export const SubjectNumberCount = styled(TextField)`
  margin: 0 2px;
  width: 28px; ;
`;
