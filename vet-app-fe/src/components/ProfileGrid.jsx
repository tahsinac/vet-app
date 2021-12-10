import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../constants.js";
import ProfileCard from "./ProfileCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function ProfileGrid() {

  const [animals, setAnimals] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     fetch(SERVER_URL + "animals")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // animals: responseData
  //         const animalData = data.map((a) => {
  //           return {
  //             animalId: a.animalId,
  //             animalName: a.animalName,
  //             tattooNum: a.tattooNum,
  //             breed: a.breed,
  //             image: a.animalPhoto[0].theFile,
  //           };
  //         });
  //         console.log(animalData)
  //         setAnimals(animalData);
  //         // console.log(animals)
  //       })
  //       .catch((err) => console.error(err));
  //   })();
  // }, []);

  useEffect(() => {
      fetch(SERVER_URL + "animals")
        .then((response) => response.json())
        .then((data) => {
          // animals: responseData
          const animalData = data.map((a) => {
            return {
              animalId: a.animalId,
              animalName: a.animalName,
              tattooNum: a.tattooNum,
              breed: a.breed + " " + a.species,
              image: "/images/" + a.animalPhoto[0].theFile,
            };
          });
          // console.log(animalData)
          setAnimals(animalData);
        })
        .catch((err) => console.error(err));
  }, []);


  
  
  return (
    <div>
      <Container sx={{ p: 2 }}>
        <Grid container spacing={4}>
        {animals.map(a => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <ProfileCard 
                img = {a.image}
                name = {a.animalName}
                tattooNum = {a.tattooNum}
                breed = {a.breed}/>
            </Grid>
          );
        })}
        </Grid>
      </Container>
    </div>
  );
}
