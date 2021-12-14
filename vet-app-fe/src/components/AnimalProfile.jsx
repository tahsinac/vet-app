import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { SERVER_URL } from "../constants.js";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Combined from "./Combined";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RequestTreatmentButton from "./RequestTreatmentButton.jsx";
import RequestInstructionButton from "./RequestInstructionButton.jsx";
import auth from "../authentication/AuthenticationService";

export default function AnimalProfile(props) {
  const [animal, setAnimal] = useState([]);
  const location = useLocation();
  const [displayInstructionButton, setDisplayInstructionButton] = useState(false);
  const [displayTreatmentButton, setDisplayTreatmentButton] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  function hasPhoto(data) {
    return data.animalPhoto.length === 0 ? false : true;
  }

    useEffect(() => {
        const user = auth.getCurrentUser();
        let imagePath = "";
        let tempID;
    
        if (user) {
          setCurrentUser(user);
          if (
            user.roles.includes("ROLE_TEACHING_TECHNICIAN") === true
          ) {
            setDisplayInstructionButton(true);
          }
          if (
            user.roles.includes("ROLE_ANIMAL_CARE_ATTENDANT") === true
          ) {
            setDisplayTreatmentButton(true);
          }
        }



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
        console.log(data);
        hasPhoto(data)
          ? (imagePath = `${data.animalPhoto[0].theFile}`)
          : (imagePath = `animals.jpg`);
        localStorage.setItem(
          `animalPhoto`,
          imagePath
          // `animalPhoto`,
          // JSON.stringify(data.animalPhoto[0].theFile)
        );
        setAnimal(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

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
            <Typography variant="h5" component="div">
              {animal.animalName}
            </Typography>
            <Typography variant="subtitle2" component="div">
              {`Status: ${animal.theStatus}`}
            </Typography>
          </Stack>
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1, m: 1 }}>
          <Button variant="contained" color="secondary" sx={{ m: 4 }}>
            Update Status
          </Button>
          {displayTreatmentButton && (<RequestTreatmentButton animal = {animal}/>)}
          {displayInstructionButton && (<RequestInstructionButton animal = {animal}/>)}
        </Box>
      </Box>
      <Combined animal={animal} />
    </div>
  );
}