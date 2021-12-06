import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent sx={{ p: 1}}>
      <Typography sx={{ mb: 1.5}} color="text.secondary" align="left">
        Something happened..
      </Typography>
      <Typography variant="body2" align="left">
        ksjdnv dfig ldfkjgksdfj gkdlfgj hlasdfkj glskdjfbg lsidjfhg 
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">See More</Button>
    </CardActions>
  </React.Fragment>
);

export default function Comment() {
  return (
    <Box sx={{ minWidth: 300 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}