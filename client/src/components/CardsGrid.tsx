import Grid from '@material-ui/core/Grid';
import MediaCard from './Card';
import { useHistory } from 'react-router-dom';
import { PRODUCT_ROUTE } from 'src/utils/consts';
import ListProducts from './ListProducts';

const CardsGrid = () => {

  const history = useHistory();

  return (
    <Grid container spacing={2} justifyContent="center">
      {ListProducts().map(value => (
        <Grid item key={value.id} onClick={() => history.push(PRODUCT_ROUTE + '/' + value.id)}>
          <MediaCard {...value}> </MediaCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardsGrid;