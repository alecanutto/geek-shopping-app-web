import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { formatValue } from '../../app/share';
import { IProduct } from '../../app/interfaces';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Products(props: { products: IProduct[] }) {
  const { products } = props;
  return (
    <React.Fragment>
      <Title>Recent Products</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Created</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.created}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category.name}</TableCell>
              <TableCell>{row.productType}</TableCell>
              <TableCell align="right">{formatValue(row.price)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more products
      </Link>
    </React.Fragment>
  );
}
