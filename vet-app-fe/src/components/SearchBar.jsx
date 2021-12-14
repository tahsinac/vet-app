import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { SERVER_URL } from "../constants.js";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {

const [animals, setAnimals] = useState([]);

useEffect(() => {
    fetch(SERVER_URL + "animals")
      .then((response) => response.json())
      .then((data) => {
        // animals: responseData
        const animalData = data.map((a) => {
          return [a.animalName];
        });
        setAnimals(animalData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Autocomplete
      disablePortal
      id="disableClearable"
      options={animals}
      sx={{ width: 300 }}
      forcePopupIcon={true}
      noOptionsText={'No animal found'}
      renderInput={(params) => <TextField {...params} label="Search Animals .." sx={{ m: 1, width: "50ch" }}/>}/>
  );
}