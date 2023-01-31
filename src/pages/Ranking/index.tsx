import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import api from "../../services/api";
import { IRanking } from "../../interfaces";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Ranking = () => {
  const [rankingElements, setRankingElements] = useState<Array<IRanking>>([]);

  useEffect(() => {
    const getRanking = async () => {
      const { data } = await api.getRanking();
      setRankingElements(data.body);
    };
    getRanking();
  }, []);

  return (
    <Container sx={{ marginTop: 10 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Posição</StyledTableCell>
              <StyledTableCell align="center">E-mail</StyledTableCell>
              <StyledTableCell align="center">
                Questões resolvidas
              </StyledTableCell>
              <StyledTableCell align="center">
                Questões corretas
              </StyledTableCell>
              <StyledTableCell align="center">
                Taxa de acerto (%)
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rankingElements.length > 0
              ? rankingElements.map((row: IRanking) => (
                  <StyledTableRow key={row.position}>
                    <StyledTableCell component="th" scope="row">
                      {row.position}º
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.userEmail}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.totalQuestions}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.rightAnswers}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.hitRatio.toFixed(2)}%
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Ranking;
