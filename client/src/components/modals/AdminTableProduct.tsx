import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListProducts from '../ListProducts';
import { Card, CardActionArea, CardMedia, Grid } from '@mui/material';
import ChangeProduct from './ChangeProduct';
import DeleteAProduct from './DeleteAProduct';

export default function ProductTable() {
  return (
    <TableContainer component={Paper} style={{height:'50vh'}}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell >ImgUrl</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Price($)</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ListProducts().map(Product => (
            <TableRow key={Product.id}>
              <TableCell component="th" scope="row">
                <CardMedia
                sx={{ maxWidth: 50, maxHeight: 50}}
                component="img"
                image={Product.imgUrl}
                />
              </TableCell>
              <TableCell align="left">{Product.name}</TableCell>
              <TableCell align="left">{Product.categoryType.name}</TableCell>
              <TableCell align="left">{Product.price}</TableCell>
              <TableCell align="left">{Product.quantity}</TableCell>
              <TableCell align="left">
                <ChangeProduct {...Product}/>
                <DeleteAProduct {...Product}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
