import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';
import { AddButtonProps } from 'src/components/Interfaces/IAddButtons';

export default function AddButton({ store: {text}, handleClick }: AddButtonProps) {
    return (
        <Button
        onClick={handleClick}
        variant="contained"
        startIcon={<AddCircleOutlineIcon />}
        className='addButton'
        color="success"
      >
        {text}
      </Button>
    );
}
