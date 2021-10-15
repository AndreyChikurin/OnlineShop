import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ListCategories from '../ListCategories';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import { NewProduct } from 'src/models/Product';
import { Service } from 'src/Service';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { styles } from './Styles';
import './AdminPanel.css';
import TextFields from './TextFieldsForProduct';

const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const service: Service = new Service();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [categoryTypeId, setCategoryTypeId] = useState('');

  const newProduct = new NewProduct(name, price, img, quantity, categoryTypeId);
  console.log(newProduct);
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outlined"
        startIcon={<AddCircleOutlineIcon />}
        size="large"
        className="adminButton"
      >
        Add a product
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...styles }}>
          <form onSubmit={async () => await service.saveProduct(newProduct)}>
            <br />
            <Typography gutterBottom variant="h5" component="div">
              Add a product
            </Typography>
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
            <Grid container direction={'column'} spacing={3}>
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

export default AddProduct;
