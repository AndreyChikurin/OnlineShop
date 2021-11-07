import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import { NewProduct, Product } from '../../models/Product';
import { Service } from '../../Service';
import ListProducts from '../ListProducts';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import { styles } from './Styles';
import './AdminPanel.css';
import ProductComponent from './ProductComponent';

const ChangeProduct = (props: Product) => {
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
  const [imgUrl, setImgUrl] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [categoryTypeId, setCategoryTypeId] = useState('');

  const watch={
    name: name,
    price: price,
    imgUrl: imgUrl,
    quantity: quantity,
    categoryTypeId: categoryTypeId,
    setName: setName,
    setPrice: setPrice,
    setImgUrl: setImgUrl,
    setQuantity: setQuantity,
    setCategoryTypeId: setCategoryTypeId,
  }

  const putProduct = new NewProduct(name, price, imgUrl, quantity, categoryTypeId, id);
  console.log(putProduct)

  return (
    <div>
      <Button
        onClick={() => {setId(props.id);setName(props.name);setImgUrl(props.imgUrl);setPrice(props.price);setQuantity(props.quantity);setCategoryTypeId(props.categoryType.id);handleOpen()}}
        variant="outlined"
        startIcon={<ChangeCircleOutlinedIcon />}
        className="adminButton"
      >
        Change
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...styles }}>
          <form onSubmit={async () => await service.putProduct(putProduct)}>
            <br />
            <Typography gutterBottom variant="h5" component="div">
              Change a product
            </Typography>
            <Grid container direction={'column'} spacing={3}>
              <Grid item >
              </Grid>
              <Grid item >
                <ProductComponent
                  watch={watch}
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
