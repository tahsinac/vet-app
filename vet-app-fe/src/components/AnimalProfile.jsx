import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { SERVER_URL } from "../constants.js";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Combined from "./Combined";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UpdateStatusButton from "./UpdateStatusButton"; 

export default function AnimalProfile() {
  const [animal, setAnimal] = useState([]);
  const location = useLocation();
  const [status, setStatus] = useState([]);

  function hasPhoto(data) {
    return data.animalPhoto.length === 0 ? false : true;
  }

  useEffect(() => {
    let imagePath = "";
    let tempID;

    if (location.state.id === undefined) {
      tempID = location.state;
    } else {
      tempID = location.state.id;
    }

    console.log(location.state);
    fetch(SERVER_URL + "animals/" + tempID)
      .then((response) => response.json())
      // .then((tempData) => console.log(tempData))
      .then((data) => {
        hasPhoto(data)
          ? (imagePath = `${data.animalPhoto[0].theFile}`)
          : (imagePath = `animals.jpg`);
        localStorage.setItem(
          `animalPhoto`,
          imagePath
        );
        setAnimal(data);
        // setStatus(data.animalStatus)
        if (data.hasOwnProperty("animalStatus")){
          setStatus(data.animalStatus)
        }
        
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(animal.animalStatus);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Avatar
            alt="animal image"
            src={`/images/${localStorage.getItem("animalPhoto")}`}
            sx={{ width: 90, height: 90 }}
          />
          <Stack spacing={0.1}>
            <Typography variant="h4" component="div">
              {animal.animalName}
            </Typography>
            {!status ? 
              (<Typography variant="subtitle2" component="div">
                Status: N/A 
              </Typography>) :
              (<Typography variant="subtitle2" component="div">
              {`Status: ${status.theStatus}`} 
            </Typography>)
            }
            {!status ? 
              (<Typography variant="subtitle2" component="div">
                Location: N/A 
              </Typography>) :
              (<Typography variant="subtitle2" component="div">
              {`Status: ${status.location}`} 
            </Typography>)
            }
          </Stack>
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1, m: 1 }}>
          <UpdateStatusButton animal={animal}/>
          <Button variant="contained" color="secondary" sx={{ m: 4 }}>
            Request Treatment
          </Button>
          <Button variant="contained" color="secondary" sx={{ m: 4 }}>
            Request For Instruction
          </Button>
        </Box>
      </Box>
      <Combined animal={animal} />
    </div>
  );
}