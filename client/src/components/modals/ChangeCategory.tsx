import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ListCategories from '../ListCategories';
import { Grid, MenuItem, TextField, Typography } from '@mui/material';
import { Service } from '../../Service';
import { Category } from '../../models/Category';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import { styles } from './Styles';
import './AdminPanel.css';
import CategoryComponent from './CategoryComponent';

const ChangeCategory = (props: Category) => {
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

  const putCategory = new Category(name, description, id);

  return (
    <div>
      <Button
        onClick={() => {props.id?setId(props.id):setId('');setName(props.name);setDescription(props.description);handleOpen()}}
        variant="outlined"
        startIcon={<ChangeCircleOutlinedIcon />}
        className="adminButton"
      >
        Change
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...styles }}>
          <form onSubmit={async () => await service.putCategory(putCategory)}>
            <br />
            <Typography gutterBottom variant="h5" component="div">
              Change a category
            </Typography>
            <Grid container direction={'column'} spacing={3}>
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
