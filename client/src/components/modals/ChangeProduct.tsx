import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ListCategories from '../ListCategories';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import { NewProduct } from '../../models/Product';
import { Service } from '../../Service';
import ListProducts from '../ListProducts';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import { styles } from './Styles';
import './AdminPanel.css';
import TextFields from './TextFieldsForProduct';

const ChangeProduct = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const service: Service = new Service();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [categoryTypeId, setCategoryTypeId] = useState('');

  const putProduct = new NewProduct(name, price, img, quantity, categoryTypeId, id);
  console.log(putProduct);
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outlined"
        startIcon={<ChangeCircleOutlinedIcon />}
        size="large"
        className="adminButton"
      >
        Change a product
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...styles }}>
          <form onSubmit={async () => await service.putProduct(putProduct)}>
            <br />
            <Typography gutterBottom variant="h5" component="div">
              Change a product
            </Typography>
            <Grid container direction={'column'} spacing={3}>
              <Grid item>
                <TextField
                  required
                  select
                  label="Select a product"
                  value={id}
                  onChange={e => setId(e.target.value)}
                  helperText="Please select a product"
                  className="width500"
                >
                  {ListProducts().map(product => (
                    <MenuItem key={product.id} value={product.id}>
                      {product.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item >
                <TextFields
                  name={name}
                  price={price}
                  img={img}
                  quantity={quantity}
                  categoryTypeId={categoryTypeId}
                  setName={setName}
                  setPrice={setPrice}
                  setImg={setImg}
                  setQuantity={setQuantity}
                  setCategoryTypeId={setCategoryTypeId}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" type="submit">
                  Save
                </Button>
              </Grid>
            </Grid>
            <Box className="saveButton">
              <Button onClick={handleClose}>Close</Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ChangeProduct;
