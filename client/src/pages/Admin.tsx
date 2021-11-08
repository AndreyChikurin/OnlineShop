import { Grid } from '@mui/material';
import AddProduct from '../components/modals/AddProduct';
import  '../../src/components/modals/AdminPanel.css'
import './PagesStyle.css';
import AddCategory from 'src/components/modals/AddCategory';
import ProductTable from 'src/components/modals/AdminTableProduct';
import CategoryTable from 'src/components/modals/AdminTableCategory';

const Admin = () => {
  return (
      <Grid className='adminGrid'>
        <Grid container direction="column">
          <Grid container className="spaceBetween">
            <h3>Product List</h3>
            <AddProduct />
          </Grid>
          <ProductTable />
          <Grid container className="spaceBetweenMt3">
            <h3>Category List</h3>
            <AddCategory />
          </Grid>
          <CategoryTable />
        </Grid>
      </Grid>
  );
};
export default Admin;

