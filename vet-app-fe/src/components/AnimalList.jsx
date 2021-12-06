import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../constants.js";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Axios from "axios";

//Reqests management from hackathon
export default function AnimalList() {
  const [colDefs] = useState([
    { field: "id", headerName: "Animal ID", width: 200 },
    { field: "species", headerName: "Species", width: 350 },
    { field: "requestedBy", headerName: "Requested By", width: 350 },
    { field: "requestStatus", headerName: "Request Status", width: 350 },
    { field: "approvalStatus", headerName: "Approval Status", width: 350 },
  ]);

  const [rowData, setRowData] = useState([]);

  const [data, setData] = useState("");

  const [selectedAnimal, setselectedAnimal] = useState([]);

  const dataToRequest = async () => {
    const selectedAnimalId = data[0].id;
    await Axios.get(SERVER_URL + "animals/" + selectedAnimalId)
      .then((response) => {
        setselectedAnimal(response.data);
        // console.log(selectedAnimal.requestedBy)
        selectedAnimal.requestedBy = "Teaching Technician";
        selectedAnimal.requestStatus = "New";
        selectedAnimal.approvalStatus = "Pending";
        // console.log(selectedAnimal.requestedBy)
        const config = { headers: { "Content-Type": "application/json" } };
        Axios.put(
          SERVER_URL + "animals/" + selectedAnimalId,
          selectedAnimal,
          config
        );
        setselectedAnimal(response.data);
      })
      .catch((err) => console.error(err));
  };

  const dataToAccept = async () => {
    const selectedAnimalId = data[0].id;
    await Axios.get(SERVER_URL + "animals/" + selectedAnimalId)
      .then((response) => {
        setselectedAnimal(response.data);
        if (
          selectedAnimal.requestStatus === "New" &&
          selectedAnimal.approvalStatus === "Pending"
        ) {
          selectedAnimal.requestStatus = "Accepted by Admin";
          selectedAnimal.approvalStatus = "Pending Final Approval";
          const config = { headers: { "Content-Type": "application/json" } };
          Axios.put(
            SERVER_URL + "animals/" + selectedAnimalId,
            selectedAnimal,
            config
          );
          setselectedAnimal(response.data);
        } else {
          alert("Unable to process request!");
        }
      })
      .catch((err) => console.error(err));
  };

  const dataToApprove = async () => {
    const selectedAnimalId = data[0].id;
    await Axios.get(SERVER_URL + "animals/" + selectedAnimalId)
      .then((response) => {
        setselectedAnimal(response.data);
        if (
          (selectedAnimal.requestStatus === "New" ||
            selectedAnimal.requestStatus === "Accepted by Admin") &&
          (selectedAnimal.approvalStatus === "Pending" ||
            selectedAnimal.approvalStatus === "Pending Final Approval")
        ) {
          selectedAnimal.requestStatus = "Approved";
          selectedAnimal.approvalStatus = "Approved";
          const config = { headers: { "Content-Type": "application/json" } };
          Axios.put(
            SERVER_URL + "animals/" + selectedAnimalId,
            selectedAnimal,
            config
          );
          setselectedAnimal(response.data);
        } else {
          alert("Unable to process request!");
        }
      })
      .catch((err) => console.error(err));
  };

  const dataToDeny = async () => {
    const selectedAnimalId = data[0].id;
    await Axios.get(SERVER_URL + "animals/" + selectedAnimalId)
      .then((response) => {
        setselectedAnimal(response.data);
        if (
          (selectedAnimal.requestStatus === "New" ||
            selectedAnimal.requestStatus === "Accepted by Admin") &&
          (selectedAnimal.approvalStatus === "Pending" ||
            selectedAnimal.approvalStatus === "Pending Final Approval")
        ) {
          selectedAnimal.requestStatus = "None";
          selectedAnimal.approvalStatus = "None";
          const config = { headers: { "Content-Type": "application/json" } };
          Axios.put(
            SERVER_URL + "animals/" + selectedAnimalId,
            selectedAnimal,
            config
          );
          setselectedAnimal(response.data);
        } else {
          alert("Unable to process request!");
        }
      })
      .catch((err) => console.error(err));
  };

  const dataToCancel = async () => {
    const selectedAnimalId = data[0].id;
    await Axios.get(SERVER_URL + "animals/" + selectedAnimalId)
      .then((response) => {
        setselectedAnimal(response.data);
        if (
          (selectedAnimal.requestStatus === "New" ||
            selectedAnimal.requestStatus === "Accepted by Admin") &&
          (selectedAnimal.approvalStatus === "Pending" ||
            selectedAnimal.approvalStatus === "Pending Final Approval")
        ) {
          selectedAnimal.requestStatus = "None";
          selectedAnimal.approvalStatus = "None";
          const config = { headers: { "Content-Type": "application/json" } };
          Axios.put(
            SERVER_URL + "animals/" + selectedAnimalId,
            selectedAnimal,
            config
          );
          setselectedAnimal(response.data);
        } else {
          alert("Unable to process request!");
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    (async () => {
      fetch(SERVER_URL + "animals/")
        .then((response) => response.json())
        .then((rowData) => {
          // animals: responseData
          const animalData = rowData.map((a) => {
            return {
              id: a.animalId,
              species: a.species,
              requestedBy: a.requestedBy,
              approvalStatus: a.approvalStatus,
              requestStatus: a.requestStatus,
            };
          });

          //console.log(animalData);
          setRowData(animalData);
        })
        .catch((err) => console.error(err));
    })();
  }, [selectedAnimal]);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1, m: 1 }}>
        <Button
          onClick={() => dataToApprove()}
          variant="contained"
          color="success"
          sx={{ m: 1 }}
        >
          Approve
        </Button>
        <Button
          onClick={() => dataToAccept()}
          variant="contained"
          color="secondary"
          sx={{ m: 1 }}
        >
          Accept
        </Button>
        <Button
          onClick={() => dataToDeny()}
          variant="contained"
          color="error"
          sx={{ m: 1 }}
        >
          Deny
        </Button>
        <Button
          onClick={() => dataToCancel()}
          variant="contained"
          color="error"
          sx={{ m: 1 }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => dataToRequest()}
          variant="contained"
          sx={{ m: 1 }}
        >
          Request
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
          //window.location.reload(false);
        }}
      />
    </div>
  );
}
