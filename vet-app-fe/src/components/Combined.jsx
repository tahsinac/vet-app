import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AnimalTab from "./AnimalTab";
import StickyHeadTable from "./Table";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Combined() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <StickyHeadTable />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <AnimalTab />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
