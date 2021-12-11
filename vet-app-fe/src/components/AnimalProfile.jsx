import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Combined from "./Combined";
import { useState } from "react";

export default function AnimalProfile() {
  const location = useLocation();

  useEffect(() => {
    // console.log(location.pathname);
    // console.log(location.state);
    console.log(location.state);
  });

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
            src="/images/animals.jpg"
            sx={{ width: 90, height: 90 }}
          />
          <Typography variant="h5" component="div">
            Animal Name
          </Typography>
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1, m: 1 }}>
          <Button variant="contained" color="secondary" sx={{ m: 4 }}>
            Request Treatment
          </Button>
          <Button variant="contained" color="secondary" sx={{ m: 4 }}>
            Request For Instruction
          </Button>
        </Box>
      </Box>
      <Combined />
    </div>
  );
}
