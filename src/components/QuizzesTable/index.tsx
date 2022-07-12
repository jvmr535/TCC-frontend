import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import api from "../../services/api";
import { useNavigate } from "react-router";

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

const QuizesTable: React.FC = () => {
  const [rows, setRows] = useState<Array<any>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getSolvedQuizzes = async () => {
        const response = (await api.getSolvedQuizzes()).body;
        for (const quiz of response) {
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
      console.log(error);
    }
  }, []);

  const handleRowClick = (quiz: any) => {
    console.log(quiz);
    navigate("/quizReview", { state: { quiz: quiz } });
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.code}
                  onClick={() => handleRowClick(row.quiz)}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default QuizesTable;
