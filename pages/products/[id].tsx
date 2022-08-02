import React from 'react';
import useSWR from 'swr';
import { IProduct } from '../../app/interfaces';
import { URL_BASE } from '../../app/share';
import Product from '../../components/Product/Product';
import { apiGetAllProducts, apiGetProduct } from '../api/apiService';

export async function getStaticPaths() {
  const products = await apiGetAllProducts();
  const paths = products.map(product => ({
    params: { id: String(product.id) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: Props) {
  const { id } = params;
  const product = await apiGetProduct(id);

  return {
    props: { ...product },
  };
}

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetails(props: IProduct) {
  const { data: product } = useSWR(
    'product',
    () => fetch(`${URL_BASE}/product/${props.id}`).then(res => res.json()),
    {
      fallbackData: props,
    }
  );

  return <>{product && <Product product={product} />} </>;
}
