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
import NewCommentButton from "./NewCommentButton";

const columns = [
  { id: "username", label: "Author", minWidth: 100 },
  { id: "theDescription", label: "Description", minWidth: 100 },

];

function createData(username, theDescription) {
  return { username, theDescription };
}

function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
      if ((list[i].username === obj.username) && (list[i].theDescription === obj.theDescription)){
          return true;
      }
  }

  return false;
}

var rows = [];


export default function CommentsTable() {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(SERVER_URL + "animals/1")
      .then((response) => response.json())
      .then((data) => {
        const commentsData = data.theComment.map((p) => {
          return {
            username: p.username,
            theDescription: p.theDescription,
          };
        });
        setComments(commentsData);
        console.log(commentsData)

        
      })
      .then(function(data) {

      })
      .catch((err) => console.error(err));
}, []);

  return (
    <div>
      
      {(comments.forEach((element) => {
        if(!containsObject(createData(element.username, element.theDescription), rows)) {
          rows.push(createData(element.username, element.theDescription))
        }
          
        }))}

      <Box>
        <Box display="flex" justifyContent="flex-end">
          <NewCommentButton />
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