import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom"; //added

export default function ProfileCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <CardMedia
              component="img"
              alt="animals"
              height="140"
              image={props.img}
            />
            <Typography variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.tattooNum}
            </Typography>
            <Typography variant="body2">{props.breed}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" component={Link} to="/animal-profile">
              View Profile
            </Button>
          </CardActions>
    </React.Fragment>
      </Card>
    </Box>
  );
}
