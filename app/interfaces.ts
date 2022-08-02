export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  productType: ProductType;
  category: ICategory;
  created: string;
}

export interface ICategory {
  id: number;
  name: string;
  created: string;
}

export enum ProductType {
  Resale,
  Packing,
  Service,
}
