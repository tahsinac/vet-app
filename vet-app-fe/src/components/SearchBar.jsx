import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { SERVER_URL } from "../constants.js";

export default function SearchBar() {

const [animals, setAnimals] = useState([]);

useEffect(() => {
    fetch(SERVER_URL + "animals")
      .then((response) => response.json())
      .then((data) => {
        // animals: responseData
        const animalData = data.map((a) => {
          return {
            animalName: a.animalName,
            animalId: a.animalId
          };
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
      getOptionLabel={(option) => option.animalName}
      sx={{ width: 300 }}
      forcePopupIcon={true}
      noOptionsText={'No animal found'}
      renderInput={(params) => <TextField {...params} label="Search Animals .." sx={{ m: 1, width: "50ch" }}/>}/>
  );
}