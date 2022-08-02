import { Box, Button, Container, Tooltip } from '@mui/material';
import { NextPage } from 'next';
import { IProduct } from '../../app/interfaces';
import ProductTable from '../../components/Product/ProductTable';
import { apiGetAllProducts } from '../api/apiService';

interface Props {
  products: IProduct[];
}

const Index: NextPage<Props> = ({ products }) => {
  return (
    <Container sx={{ padding: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingBottom: 4,
        }}
      >
        <Tooltip title="New">
          <Button variant="contained">New Product</Button>
        </Tooltip>
      </Box>
      <Box>
        <ProductTable products={products} />
      </Box>
    </Container>
  );
};

export default Index;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const products = await apiGetAllProducts();

  return {
    props: {
      products,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
