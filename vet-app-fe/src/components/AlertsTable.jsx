import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import AddAlertButton from "./AddAlertButton";

const columns = [
  { id: "priority", label: "Priority", minWidth: 170 },
  { id: "message", label: "Message", minWidth: 100 },
  { id: "location", label: "Location", minWidth: 170 },
];

function createData(priority, message, location) {
  return { priority, message, location };
}

const rows = [
  createData("Medium", "Please get address from client", "VET Building"),
  createData("Low", "Found with broken tail", "Engineering building"),
  createData("High", "Found with broken leg", "Cafeteria"),
];

export default function AlertsTable() {
  return (
    <div>
      <Box>
        <Box display="flex" justifyContent="flex-end">
          <AddAlertButton />
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
