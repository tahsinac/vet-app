import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const card = (
  <React.Fragment>
    <CardContent>
    <CardMedia
        component="img"
        alt="animals"
        height="200"
        image="/images/cat.jpg"
      />
      
      <Typography sx={{ p: 1 }} color="text.secondary" align="left">
        Headshot
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Box>
        <Button variant="contained" color="success" size = "small" sx={{ m: 1 }}>SET DEFAULT</Button>
        <Button variant="contained" color="error" size = "small" sx={{ m: 1 }}>DELETE</Button>
      </Box>
    </CardActions> */}
  </React.Fragment>
);

export default function PhotoCard() {
  return (
    <Box sx={{ minWidth: 100 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}