import { Grid } from '@mui/material';
import AddProduct from '../components/modals/AddProduct';
import ChangeProduct from '../components/modals/ChangeProduct';
import DeleteAProduct from '../components/modals/DeleteAProduct';
import  '../../src/components/modals/AdminPanel.css'
import './PagesStyle.css';

const Admin = () => {
  return (
    <Grid className='adminGrid'>
      <Grid container direction="column" className="centerFlex">
        <AddProduct></AddProduct>
        <ChangeProduct></ChangeProduct>
        <DeleteAProduct></DeleteAProduct>
      </Grid>
    </Grid>
  );
};
export default Admin;

