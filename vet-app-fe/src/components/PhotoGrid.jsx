import React, { useState } from "react";
import PhotoCard from "./PhotoCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import UploadImageButton from "./UploadImageButton";

export default function PhotoGrid(props) {
 
  console.log(props.animal);
  return (
    <Container sx={{ p: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1, m: 1 }}>
        <UploadImageButton />
      </Box>
      <Grid container spacing={4}>
        {(props.animal.animalPhoto || []).map(p => {
          return (
            <Grid Grid item xs={12} sm={6} md={4}>
              <PhotoCard 
                creationDate = {p.creationDate}
                theFile = {p.theFile}
                theType = {p.theType}
              />
            </Grid>
          );
        })
      }
      </Grid>
    </Container>
  );
}


{/* <Grid item xs={12} sm={6} md={4}>
          <PhotoCard />
        </Grid> */}<Grid Grid item xs={12} sm={6} md={4}>
            <PhotoCard />
            </Grid>