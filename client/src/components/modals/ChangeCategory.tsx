import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ListCategories from '../ListCategories';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import { Service } from '../../Service';
import { NewCategory } from '../../models/Category';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import { styles } from './Styles';
import './AdminPanel.css';
import CategoryComponent from './CategoryComponent';

const ChangeCategory = () => {
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
  const [description, setDescription] = useState('');

  const category = {
    name: name,
    setName: setName,
    description: description,
    setDescription: setDescription,
  };

  const putCategory = new NewCategory(name, description, id);
  console.log(putCategory);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="outlined"
        startIcon={<ChangeCircleOutlinedIcon />}
        size="large"
        className="adminButton"
      >
        Change a category
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...styles }}>
          <form onSubmit={async () => await service.putCategory(putCategory)}>
            <br />
            <Typography gutterBottom variant="h5" component="div">
              Change a category
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
              <Grid item >
                <CategoryComponent category={category} />
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

export default ChangeCategory;
