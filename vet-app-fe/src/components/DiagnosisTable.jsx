import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button } from "@mui/material";

const columns = [
  { id: "diagnosis", label: "Diagnosis", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 170 },
  { id: "diagnosedBy", label: "Diagnosed By", minWidth: 100 },
];

function createData(diagnosis, date, diagnosedBy) {
  return { diagnosis, date, diagnosedBy };
}

const rows = [
  createData("Medicine 1", "05/07/2020", "Dr. John Doe"),
  createData("Medicine 2", "05/10/2020", "Dr. John Doe"),
  createData("Medicine 3", "05/15/2020", "Dr. John Doe"),
  createData("Medicine 4", "Dr. John Doe"),
  createData("Medicine 5", "05/25/2020", "Dr. John Doe"),
];

export default function DiagnosisTable() {
  return (
    <div>
      <Box>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="secondary" sx={{ m: 1 }}>
            New
          </Button>
        </Box>
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
                      key={row.Attribute}
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
      </Box>
    </div>
  );
}
