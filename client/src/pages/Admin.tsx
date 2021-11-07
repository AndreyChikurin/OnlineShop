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
import CategoryTable from 'src/components/modals/AdminTableCategory';

const Admin = () => {
  return (
      <Grid className='adminGrid' style={{width:'70vh'}}>
        <Grid container direction="column" className="centerFlex">
          <Grid container style={{justifyContent:'space-between'}}>
            <h3>Product List</h3>
            <AddProduct />
          </Grid>
          <ProductTable />
          <Grid container style={{justifyContent:'space-between',marginTop:'3vh'}}>
            <h3>Category List</h3>
            <AddCategory />
          </Grid>
          <CategoryTable />
        </Grid>
      </Grid>
  );
};
export default Admin;

