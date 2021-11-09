import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@material-ui/core';
import { Product } from 'src/models/Product';

const MediaCard = (product: Product) => {
  return (
    <Card sx={{ minWidth: 250, minHeight: 430, maxWidth: 250, maxHeight: 430 }}>
      <CardActionArea>
        <CardMedia
          sx={{ minWidth: 250, minHeight: 250, maxWidth: 250, maxHeight: 250 }}
          component="img"
          image={product.imgUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ minHeight: 70, maxHeight: 70 }}>
            {product.name}
          </Typography>
          <Typography variant="body1" color="black">
            {product.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
