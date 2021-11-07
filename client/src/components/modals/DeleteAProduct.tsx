import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import { Service } from '../../Service';
import ListProducts from '../ListProducts';
import DeleteIcon from '@mui/icons-material/Delete';
import { styles } from './Styles';
import './AdminPanel.css';

const DeleteAProduct = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const service: Service = new Service();

  const [id, setId] = useState('');

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" startIcon={<DeleteIcon />} className="adminButton" color="error">
        Delete
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...styles }}>
          <form onSubmit={async () => await service.deleteProduct(id)}>
            <br />
            <Typography gutterBottom variant="h5">
              Delete a product
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

export default DeleteAProduct;