import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
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
    animalName: "",
    attribute: "",
    tatto: "",
    weight: "",
    age: "",
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
                Create New Animal
              </Typography>
            </Grid>

            <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-animalName">
                Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-animalName"
                value={values.animalName}
                onChange={handleChange("animalName")}
                label="animalName"
                placeholder="Enter Animal Name"
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "40ch" }}>
              <InputLabel id="demo-simple-select-label">Animal Type</InputLabel>
              <Select
                labelId="type-label"
                id="type"
                value={type}
                label="Type"
                onChange={handleTypeChange}
                placeholder="Select Type"
              >
                <MenuItem value={10}>Cat</MenuItem>
                <MenuItem value={20}>Dog</MenuItem>
                <MenuItem value={30}>Horse</MenuItem>
                <MenuItem value={40}>Chicken</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-attribute">
                Attribute
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-attribute"
                value={values.attribute}
                onChange={handleChange("attribute")}
                label="Attribute"
                placeholder="Enter Attribute"
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
              <InputLabel htmlFor="outlined-adornment-tattoo">
                Tattoo Number
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-tatto"
                value={values.tattoo}
                onChange={handleChange("tattoo")}
                label="Tattoo"
                placeholder="Enter Tattoo"
              />
            </FormControl>

            <Button variant="contained" color="success" sx={{ m: 1 }}>
              Add New Animal
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
