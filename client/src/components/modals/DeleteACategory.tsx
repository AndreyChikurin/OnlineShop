import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ListCategories from '../ListCategories';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import { Service } from '../../Service';
import DeleteIcon from '@mui/icons-material/Delete';
import { styles } from './Styles';
import './AdminPanel.css';

const DeleteACategory = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const service: Service = new Service();

  const [id, setId] = useState('');

  console.log(id);
  return (
    <div>
      <Button onClick={handleOpen} variant="outlined" startIcon={<DeleteIcon />} size="large" className="adminButton">
        Delete a category
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...styles }}>
          <form onSubmit={async () => await service.deleteCategory(id)}>
            <br />
            <Typography gutterBottom variant="h5">
              Delete a category
            </Typography>
            <Grid container direction={'column'} spacing={3}>
              <Grid item>
                <TextField
                  required
                  select
                  label="Select a category"
                  value={id}
                  onChange={e => setId(e.target.value)}
                  helperText="Please select a category"
                  className="width500"
                >
                  {ListCategories().map(category => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
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

export default DeleteACategory;