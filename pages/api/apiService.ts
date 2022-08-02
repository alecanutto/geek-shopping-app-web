import axios from 'axios';
import { IProduct } from '../../app/interfaces';
import { URL_BASE } from '../../app/share';

export async function apiGetAllProducts(filter?: string): Promise<IProduct[]> {
  const { data } = await axios.get(`${URL_BASE}/product${filter}`);
  return data;
}

export async function apiGetProduct(id: string): Promise<IProduct> {
  const { data } = await axios.get(`${URL_BASE}/product/${id}`);
  return data;
}
