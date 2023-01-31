import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import api from "../../services/api";
import { useNavigate } from "react-router";
import { toastNotificationError } from "../../assets/ToastNotification";
import { QuizzesNotFoundContainer } from "./QuizzesNotFound/styles";
import QuizzesNotFound from "./QuizzesNotFound";
import { styled } from "@mui/material/styles";

interface Column {
  id: "quiz" | "dateOfRealization" | "numberOfExercises" | "score" | "review";
  label: string;
  minWidth?: number;
  align?: "center" | "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "quiz", label: "Identificador", minWidth: 170 },
  {
    id: "dateOfRealization",
    label: "Data da realização",
    minWidth: 100,
    align: "center",
  },
  {
    id: "numberOfExercises",
    label: "Quantidade de exercícios",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("pt-BR"),
  },
  {
    id: "score",
    label: "Pontuação",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("pt-BR"),
  },
];

const formatToBrazilianDate = (date: Date) => {
  return date.toString().split("T")[0].split("-").reverse().join("/");
};

function createData(
  quiz: string,
  dateOfRealization: Date,
  numberOfExercises: number,
  score: number
) {
  return {
    quiz,
    dateOfRealization: formatToBrazilianDate(dateOfRealization),
    numberOfExercises,
    score,
  };
}

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

const QuizesTable: React.FC = () => {
  const [rows, setRows] = useState<Array<any>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getSolvedQuizzes = async () => {
        const response = await api.getSolvedQuizzes();
        const { body } = response.data;
        for (const quiz of body) {
          setRows((oldArray) => [
            ...oldArray,
            createData(
              quiz.id,
              quiz.dateOfRealization,
              quiz.numberOfExercises,
              quiz.score
            ),
          ]);
        }
      };
      getSolvedQuizzes();
    } catch (error) {
      toastNotificationError(
        "Erro ao tentar exibir os questionários respondidos"
      );
    }
  }, []);

  const handleRowClick = (quiz: any) => {
    navigate("/quizReview", { state: { quiz: quiz } });
  };

  return (
    <QuizzesNotFoundContainer>
      {rows.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{ maxHeight: 440, width: "100%", overflow: "hidden" }}
        >
          <Table stickyHeader aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <StyledTableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    onClick={() => handleRowClick(row.quiz)}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <QuizzesNotFound />
      )}
    </QuizzesNotFoundContainer>
  );
};

export default QuizesTable;
