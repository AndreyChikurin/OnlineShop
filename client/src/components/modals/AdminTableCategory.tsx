import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListCategories from '../ListCategories';
import ChangeCategory from './ChangeCategory';
import DeleteACategory from './DeleteACategory';

export default function CategoryTable() {
  return (
    <TableContainer component={Paper} style={{height:'36vh'}}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ListCategories().map(Category => (
            <TableRow key={Category.id}>
              <TableCell component="th" scope="row">
                {Category.name}
              </TableCell>
              <TableCell align="left">{Category.description}</TableCell>
              <TableCell align="left">
                <ChangeCategory {...Category}/>
                <DeleteACategory {...Category}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}