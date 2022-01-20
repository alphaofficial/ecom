export interface IProductDetails {
  dimensions: {
    width: number;
    height: number;
  };
  size: number;
  description: string;
  recommendations?: {
    src: string;
    alt: string;
  }[];
}
export interface IProduct {
  name: string;
  category: string;
  price: number;
  currency: string;
  image: {
    src: string;
    alt: string;
  };
  bestseller: boolean;
  featured: boolean;
  details: IProductDetails;
}
