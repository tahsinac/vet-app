import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function NewUserForm() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    type: "",
    activationDate: "",
    status: "",
  });

  const [dateValue, setDateValue] = React.useState(new Date());

  const [type, setType] = React.useState("");

  const handleChangeDate = (dateValue) => {
    setDateValue(dateValue);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Grid
          sx={{ p: 4 }}
          item
          style={{ marginRight: "auto" }} //, border: "1px solid gray" }}
        >
          <Stack spacing={3}>
            <Grid item>
              <Typography variant="h3" color="primary">
                Add New User
              </Typography>
            </Grid>

            <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-username">
                Username
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-username"
                value={values.username}
                onChange={handleChange("username")}
                label="Username"
              />
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role Type</InputLabel>
              <Select
                labelId="role-type-label"
                id="role-type"
                value={type}
                label="Role Type"
                onChange={handleTypeChange}
              >
                <MenuItem value={10}>Admin</MenuItem>
                <MenuItem value={20}>Teaching Technician</MenuItem>
                <MenuItem value={30}>Animal Care Attendant</MenuItem>
                <MenuItem value={40}>Animal Care Technician</MenuItem>
                <MenuItem value={50}>Student</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">
                Email Address
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                value={values.email}
                onChange={handleChange("email")}
                label="Email Address"
              />
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Activation Date"
                inputFormat="MM/dd/yyyy"
                value={dateValue}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-status">
                Status
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-status"
                value={values.status}
                onChange={handleChange("status")}
                label="Status"
              />
            </FormControl>

            <Button variant="contained" color="success" sx={{ m: 1 }}>
              Add New User
            </Button>
            <Button variant="contained" color="error" sx={{ m: 1 }}>
              Cancel
            </Button>
          </Stack>
        </Grid>
      </div>
    </Box>
  );
}
