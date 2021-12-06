import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button } from "@mui/material";
import AddRxButton from "./AddRxButton";

const columns = [
  { id: "prescription", label: "Prescription", minWidth: 170 },
  { id: "description", label: "Description", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 170 },
  { id: "prescribedBy", label: "Prescribed By", minWidth: 100 },
];

function createData(prescription, description, date, prescribedBy) {
  return { prescription, description, date, prescribedBy };
}

const rows = [
  createData(
    "Medicine 1",
    "this medicine is for dogs",
    "05/07/2020",
    "Dr. John Doe"
  ),
  createData(
    "Medicine 2",
    "this medicine is for cats",
    "05/10/2020",
    "Dr. John Doe"
  ),
  createData(
    "Medicine 3",
    "this medicine is for chickens",
    "05/15/2020",
    "Dr. John Doe"
  ),
  createData(
    "Medicine 4",
    "this medicine is for horses",
    "05/20/2020",
    "Dr. John Doe"
  ),
  createData(
    "Medicine 5",
    "this medicine is for cows",
    "05/25/2020",
    "Dr. John Doe"
  ),
];

export default function RxTable() {
  return (
    <div>
      <Box>
        <Box display="flex" justifyContent="flex-end">
          <AddRxButton/>
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
