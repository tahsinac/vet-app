import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function PhotoCard() {
  return (
    <Box sx={{ minWidth: 100 }}>
      <Card variant="outlined">
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
      </React.Fragment>
      </Card>
    </Box>
  );
}