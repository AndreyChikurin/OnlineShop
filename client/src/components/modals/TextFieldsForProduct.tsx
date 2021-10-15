
import ListCategories from '../ListCategories';
import { Grid, MenuItem, TextField} from '@mui/material';
import './AdminPanel.css';

type Prop ={
    name: string;
    price: number;
    imgUrl: string;
    quantity: number;
    categoryTypeId: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setPrice: React.Dispatch<React.SetStateAction<number>>;
    setImgUrl: React.Dispatch<React.SetStateAction<string>>;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    setCategoryTypeId: React.Dispatch<React.SetStateAction<string>>;
}

export default function TextFields({ name, setName,price, setPrice,imgUrl, setImgUrl,quantity, setQuantity,categoryTypeId, setCategoryTypeId }: Prop) {

 return(
    <Grid container direction={'column'} spacing={3}>
      <Grid item>
        <TextField
          required
          label="Name"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
          inputProps={{ maxLength: 50 }}
          className="width500"
        />
      </Grid>
      <Grid item>
        <TextField
          required
          label="Price, $"
          variant="outlined"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
          type="number"
          InputProps={{
            inputProps: {
              min: 1,
            },
          }}
          className="width500"
        />
      </Grid>
      <Grid item>
        <TextField
          required
          label="Quantity"
          variant="outlined"
          type="number"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          InputProps={{
            inputProps: {
              min: 1,
            },
          }}
          className="width500"
        />
      </Grid>
      <Grid item>
        <TextField
          required
          label="Img"
          defaultValue="Image"
          variant="outlined"
          value={imgUrl}
          onChange={e => setImgUrl(e.target.value)}
          className="width500"
        />
      </Grid>
      <Grid item>
        <TextField
          required
          select
          label="Select"
          value={categoryTypeId}
          onChange={e => setCategoryTypeId(e.target.value)}
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
      </Grid>
 );
};
