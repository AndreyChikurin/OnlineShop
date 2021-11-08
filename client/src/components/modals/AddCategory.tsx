import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import { Service } from 'src/Service';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { styles } from './Styles';
import './AdminPanel.css';
import CategoryComponent from './CategoryComponent';
import { Category } from 'src/models/Category';

const AddCategory = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const service: Service = new Service();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const category = {
    name: name,
    setName: setName,
    description: description,
    setDescription: setDescription,
  };

  const newCategory = new Category(name, description);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        startIcon={<AddCircleOutlineIcon />}
        className='addButton'
        color="success"
      >
        Add a category
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...styles }}>
          <form onSubmit={async () => await service.saveCategory(newCategory)}>
            <br />
            <Typography gutterBottom variant="h5" component="div">
              Add a category
            </Typography>
            <CategoryComponent 
              category={category} 
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

export default AddCategory;
