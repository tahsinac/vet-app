import React from "react";
import ProfileCard from "./ProfileCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function ProfileGrid() {

  // const [animals, setAnimals] = useState([]);


  // useEffect(() => {
  //   (async () => {
  //     fetch(SERVER_URL + "/animals")
  //       .then((response) => response.json())
  //       .then((rowData) => {
  //         const animals = rowData.map((u) => {
  //           return {
  //             animalId: a.animalId,
  //             species: a.species,
  //             weight: a.weight,
  //             cityTattoo: a.cityTattoo,
  //             birthDate: a.birthDate,
  //             breed: a.breed,
  //             sex: a.sex,
  //             rfid: a.rfid,
  //             microchip: a.microchip,
  //             theStatus: a.theStatus,
  //             diet: a.diet,
  //             subspecies: a.subspecies,
  //             distinguishingFeatures: a.distinguishingFeatures,
  //             color: a.color,
  //             requestedBy: a.requestedBy
  //           };
  //         });
  //         setAnimals(animals);
  //       })
  //       .catch((err) => console.error(err));
  //   })();
  // }, []);
  
  return (
    <div>
      <Container sx={{ p: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <ProfileCard 
              img = "/images/dog.jpg"
              name = "Jaxon"
              tattooNum = "346122"
              breed = "Not So Great Dane"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <ProfileCard 
              img = "/images/cat.jpg"
              name = "Darcy"
              tattooNum = "338842"
              breed = "Poodle But Cat"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          <ProfileCard 
              img = "/images/horse.jpg"
              name = "Lachlan"
              tattooNum = "724502"
              breed = "Not A Pony"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProfileCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProfileCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
