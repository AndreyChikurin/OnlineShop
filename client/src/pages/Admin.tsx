import { Grid } from '@mui/material';
import AddProduct from '../components/modals/AddProduct';
import ChangeProduct from '../components/modals/ChangeProduct';
import DeleteAProduct from '../components/modals/DeleteAProduct';

const Admin = () => {
  return (
    <Grid style={{ marginTop: 50, marginLeft: 400, marginRight: 400 }}>
      <Grid container direction="column" >
        <AddProduct></AddProduct>
        <ChangeProduct></ChangeProduct>
        <DeleteAProduct></DeleteAProduct>
      </Grid>
    </Grid>
  );
};
export default Admin;

