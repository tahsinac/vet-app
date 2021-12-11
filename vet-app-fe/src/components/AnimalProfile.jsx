import React from "react";
import {Box, Button, Stack} from "@mui/material";
import { SERVER_URL } from "../constants.js";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Combined from "./Combined";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function AnimalProfile(){

  const [animal, setAnimal] = useState([]);
  const location = useLocation()

  useEffect(() => {
    fetch(SERVER_URL + "animals/" + location.state.id)
      .then((response) => response.json())
      .then((data) => {
        console.log("/images/" + data.animalPhoto[0].theFile) 
        setAnimal(data)})
      .catch((err) => console.error(err));
}, []);

    return(
        <div>
            <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        <Stack direction="row" justifyContent="center" alignItems="center"spacing={2}>
            <Avatar alt="animal image" src={`/images/${animal.animalPhoto}`}  sx={{ width: 90, height: 90 }} />
            <Typography variant="h5" component="div">{animal.animalName}</Typography>
        </Stack>
        
        <Box sx={{display: 'flex', justifyContent: 'flex-end', p:1, m: 1}}>
            <Button variant="contained" color="secondary" sx={{ m: 4 }}>Request Treatment</Button>
            <Button variant="contained" color="secondary" sx={{ m: 4 }}>Request For Instruction</Button>
        </Box>
      </Box>
      <Combined/>
        </div>
    );
}