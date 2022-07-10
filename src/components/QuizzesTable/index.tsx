import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import api from "../../services/api";

interface Column {
  id: "quiz" | "dateOfRealization" | "numberOfExercises" | "score" | "review";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "quiz", label: "Identificador", minWidth: 170 },
  { id: "dateOfRealization", label: "Data da realização", minWidth: 100 },
  {
    id: "numberOfExercises",
    label: "Quantidade de exercícios",
    minWidth: 170,
    align: "right",
  },
  {
    id: "score",
    label: "Pontuação",
    minWidth: 170,
    align: "right",
  },
  {
    id: "review",
    label: "Revisão",
    minWidth: 170,
    align: "right",
  },
];

interface Data {
  quiz: string;
  dateOfRealization: Date;
  numberOfExercises: number;
  score: number;
}

function createData(
  quiz: string,
  dateOfRealization: Date,
  numberOfExercises: number,
  score: number
): Data {
  return { quiz, dateOfRealization, numberOfExercises, score };
}

const QuizesTable: React.FC = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState<Array<any>>([]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    try {
      const getsolvedQuizzes = async () => {
        const response = (await api.getsolvedQuizzes()).body;
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
        console.log(response);
      };
      getsolvedQuizzes();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default QuizesTable;
