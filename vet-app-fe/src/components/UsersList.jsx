import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../constants.js";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom"; //added
import authToken from "../authentication/DataService";

export default function UsersList() {
  const [colDefs] = useState([
    { field: "id", headerName: "User ID", width: 200 },
    { field: "username", headerName: "Username", width: 350 },
    // { field: "theType", headerName: "Type", width: 350 },
    { field: "email", headerName: "Email", width: 350 },
    { field: "activationDate", headerName: "Activation Date", width: 350 },
    { field: "active", headerName: "Status", width: 350 },
  ]);

  const [rowData, setRowData] = useState([]);

  const [data, setData] = useState("");

  const [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    (async () => {
      fetch(SERVER_URL + "users/", { headers: authToken() })
        .then((response) => response.json())
        .then((rowData) => {
          const userData = rowData.map((u) => {
            return {
              id: u.id,
              username: u.username,
              // theType: u.theType,
              email: u.email,
              activationDate: u.activationDate,
              active: u.active,
            };
          });
          setRowData(userData);
        })
        .catch((err) => console.error(err));
    })();
  }, [selectedUser]);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1, m: 1 }}>
        <Button
          component={Link}
          to="/users/new"
          variant="contained"
          color="success"
          sx={{ m: 1 }}
        >
          Add New User
        </Button>{" "}
        <Button
          component={Link}
          to="/users/modify"
          variant="contained"
          color="secondary"
          sx={{ m: 1 }}
        >
          Modify User
        </Button>
        <Button variant="contained" color="error" sx={{ m: 1 }}>
          Remove User
        </Button>
      </Box>
      <DataGrid
        columns={colDefs}
        rows={rowData}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRowData = rowData.filter((row) =>
            selectedIDs.has(row.id)
          );
          setData(selectedRowData);
          console.log(selectedRowData);
        }}
      />
    </div>
  );
}
