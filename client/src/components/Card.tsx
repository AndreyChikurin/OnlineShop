import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@material-ui/core';

export default function MediaCard(props?: any) {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardActionArea>
        <CardMedia
            component="img"
            height="240"
            image={props.product.img}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
            {props.product.name}
            </Typography>
            <Typography variant="body1" color="black">
            {props.product.price}$
            </Typography>
        </CardContent>
      </CardActionArea>  
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
      
    </Card>
  );
}
