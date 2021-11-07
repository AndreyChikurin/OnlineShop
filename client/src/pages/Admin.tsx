import { Grid } from '@mui/material';
import AddProduct from '../components/modals/AddProduct';
import ChangeProduct from '../components/modals/ChangeProduct';
import DeleteAProduct from '../components/modals/DeleteAProduct';
import  '../../src/components/modals/AdminPanel.css'
import './PagesStyle.css';
import AddCategory from 'src/components/modals/AddCategory';
import ChangeCategory from 'src/components/modals/ChangeCategory';
import DeleteACategory from 'src/components/modals/DeleteACategory';
import ProductTable from 'src/components/modals/AdminTableProduct';

const Admin = () => {
  return (
      <Grid className='adminGrid'>
        <Grid container direction="column" className="centerFlex">
          <h3>Product List</h3>
          <ProductTable />
        </Grid>
      </Grid>
  );
};
export default Admin;

