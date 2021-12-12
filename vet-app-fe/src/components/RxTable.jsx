import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../constants.js";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import AddRxButton from "./AddRxButton";

const columns = [
  { id: "drugName", label: "Prescription", minWidth: 100 },
  { id: "instructions", label: "Instructions", minWidth: 100 },

];

function createData(drugName, instructions) {
  return { drugName, instructions };
}

function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
      if ((list[i].drugName === obj.drugName) && (list[i].instructions === obj.instructions)){
          return true;
      }
  }

  return false;
}

var rows = [];


export default function RxTable() {

  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetch(SERVER_URL + "animals/1")
      .then((response) => response.json())
      .then((data) => {
        const prescriptionData = data.prescriptionRecords.map((p) => {
          return {
            instructions: p.instructions,
            drugName: p.drugName,
          };
        });
        setPrescriptions(prescriptionData);
        console.log(prescriptionData)

        
      })
      .then(function(data) {

      })
      .catch((err) => console.error(err));
}, []);

  return (
    <div>
      
      {(prescriptions.forEach((element) => {
        if(!containsObject(createData(element.drugName, element.instructions), rows)) {
          rows.push(createData(element.drugName, element.instructions))
        }
          
        }))}

      <Box>
        <Box display="flex" justifyContent="flex-end">
          <AddRxButton />
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
