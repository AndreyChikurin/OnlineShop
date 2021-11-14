import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, CardMedia, Grid, IconButton, MenuItem, Modal, Popover, TableFooter, TablePagination, TextField, Toolbar, Tooltip, Typography, useTheme } from '@mui/material';
import ChangeProduct from './ChangeProduct';
import DeleteProduct from './DeleteProduct';
import { KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Filter, Product } from 'src/models/Product';
import { Service } from 'src/Service';
import { IFilter } from '../Interfaces/IFilter';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddProduct from './AddProduct';
import ListCategories from '../ListCategories';

export default function ProductTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const service: Service = new Service();
  
  const [priceIsLess, setPriceIsLess] = React.useState(2147483647);
  const [priceIsMore, setPriceIsMore] = React.useState(0);
  const [priceFilter, setPriceFilter] = React.useState('');
  const [сategoryId, setCategoryId] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [productCount, setProductCount] = React.useState(12);
  
  const [rows, setRows] = React.useState<Product[]>([]);

  const filter: Filter = new Filter(rowsPerPage,page,priceIsMore,priceIsLess,priceFilter,сategoryId);

  async function get() {
    const cat : IFilter = await service.getProductsPaginations(filter);
    const prod : IFilter = await service.getProductsPaginations(new Filter(cat.totalItemsCount,0,priceIsMore,priceIsLess,priceFilter,сategoryId));
    setRows(cat.productsList);
    setProductCount(prod.productsList.length);
    console.log(cat)
    return cat.productsList;
  }
    React.useEffect(() => {
      get();
    }, [page, rowsPerPage,priceIsMore,priceIsLess,priceFilter,сategoryId]);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - productCount) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  }
  
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  }

  
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseed = () => {
    setAnchorEl(null);
  };

  const opened = Boolean(anchorEl);
  const id = opened ? 'simple-popover' : undefined;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell >ImgUrl</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Price($)</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="right">
              Actions
              <Button 
                onClick={handleClicked}
                startIcon={<FilterListIcon />}
              >
              </Button>
              <Popover
                id={id}
                open={opened}
                anchorEl={anchorEl}
                onClose={handleCloseed}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Grid container direction={'column'} className="margin5">
                <Grid item className="filterGrid60">
                    <TextField
                      variant="standard"
                      select
                      label="Category"
                      size="small"
                      value={сategoryId}
                      onChange={e => {setCategoryId(e.target.value);setPage(0)}}
                      className="filterGrid10"
                    >
                      {ListCategories().map(category => (
                        <MenuItem key={category.id} value={category.id}>
                          {category.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item className="filterGrid60">
                    <TextField
                      variant="standard"
                      select
                      label="Sorting by..."
                      size="small"
                      value={priceFilter}
                      onChange={e => {setPriceFilter(e.target.value);setPage(0)}}
                      className="filterGrid10"
                    >
                      {[["Increasing price",'increasingprice'],["Decreasing price",'decreasingprice']].map(([key, value]) => (
                        <MenuItem key={value} value={value}>
                          {key}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item className="filterGrid60">
                    <TextField
                      variant="standard"
                      label="Price is more"
                      size="small"
                      type="number"
                      value={priceIsMore}
                      onChange={e => setPriceIsMore(Number(e.target.value))}
                      className="filterGrid10"
                    />
                  </Grid>
                  <Grid item className="filterGrid60">
                    <TextField
                      size="small"
                      label="Price is less"
                      variant="standard"
                      type="number"
                      value={priceIsLess}
                      onChange={e => setPriceIsLess(Number(e.target.value))}
                      className="filterGrid10"
                    />
                  </Grid>
                  <Grid item className="filterGrid60">
                    <Button className="width200" variant="contained" color="warning" onClick={() => {setPriceIsLess(2147483647);setPriceIsMore(0);setPriceFilter('');setCategoryId('');setPage(0);setRowsPerPage(4);setProductCount(12)}}>
                      Reset filters
                    </Button>
                  </Grid>
                </Grid>
              </Popover>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.length > 0 ? rows.map(Product => (
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
                <DeleteProduct {...Product}/>
              </TableCell>
            </TableRow>
          )) : null}
          {emptyRows > 0 && (
            <TableRow style={{ height: 105 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[4, 8, 10, { label: 'All', value: productCount }]}
              colSpan={6}
              count={productCount}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0}}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}