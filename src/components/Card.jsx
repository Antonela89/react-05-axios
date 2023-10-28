import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({image, title, description}) {
  return (
    <Card sx={{ maxWidth: 500, m:1}}>
      <CardActionArea>
        <CardMedia style={{objectFit:'cover'}}
          component="img"
          height="700"
          image={`https://image.tmdb.org/t/p/w500${image}`}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}