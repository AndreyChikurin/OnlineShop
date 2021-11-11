import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListProducts from '../ListProducts';
import { Box, CardMedia, IconButton, TableFooter, TablePagination, useTheme } from '@mui/material';
import ChangeProduct from './ChangeProduct';
import DeleteProduct from './DeleteProduct';
import { KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Filter, Product } from 'src/models/Product';
import { Service } from 'src/Service';
import { IFilter } from '../Interfaces/IFilter';

export default function ProductTable() {
  const service: Service = new Service();


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [productCount, setProductCount] = React.useState(12);
  
  const [rows, setRows] = React.useState<Product[]>([]);

  const filter: Filter = new Filter(rowsPerPage,page);

  async function get() {
    const cat : IFilter = await service.getProductsPaginations(filter);
    setRows(cat.productsList);
    setProductCount(cat.totalItemsCount)
    return cat.productsList;
  }
    React.useEffect(() => {
      get();
    }, [page, rowsPerPage]);

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
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.map(Product => (
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
          ))}
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