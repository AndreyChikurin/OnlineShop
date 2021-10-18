import ListCategories from '../ListCategories';
import { Grid, MenuItem, TextField } from '@mui/material';
import './AdminPanel.css';
import { ICategory } from '../Interfaces/ICategory';

export default function ProductComponent(props: ICategory) {
  return (
    <Grid container direction={'column'} spacing={3}>
      <Grid item>
        <TextField
          required
          label="Name"
          variant="outlined"
          value={props.category.name}
          onChange={e => props.category.setName(e.target.value)}
          inputProps={{ maxLength: 50 }}
          className="width500"
        />
      </Grid>
      <Grid item>
        <TextField
          required
          label="Description"
          defaultValue="Description"
          variant="outlined"
          value={props.category.description}
          onChange={e => props.category.setDescription(e.target.value)}
          className="width500"
        />
      </Grid>
    </Grid>
  );
}
