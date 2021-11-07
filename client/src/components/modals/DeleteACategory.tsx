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
import { Category } from 'src/models/Category';

const DeleteACategory = (props: Category) => {
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
      <Button onClick={() => {props.id?setId(props.id):setId('');handleOpen()}} variant="outlined" startIcon={<DeleteIcon />} className="adminButton" color="error">
        Delete
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...styles }}>
          <form onSubmit={async () => await service.deleteCategory(id)}>
            <br />
            <Typography gutterBottom variant="h5">
              Delete a {props.name} category?
            </Typography>
            <Grid container direction={'column'} spacing={3}>
              <Grid item style={{marginTop: 30}}>
                <Button variant="contained" type="submit">
                  Delete
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