import { Document } from "mongodb";
export interface IProduct extends Document {
  name: string;
  category: string;
  price: number;
  currency: "USD";
  image: {
    src: string;
    alt: string;
  };
  bestseller: boolean;
  featured: boolean;
  details?: {
    dimensions?: {
      width: number;
      height: number;
    };
    size?: number;
    description?: string;
    recommendations?: {
      src: string;
      alt: string;
    }[];
  };
  createdAt?: string;
  updatedAt?: string;
}
export interface IPaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}

export interface IFilter {
  categories?: string[];
  priceRange?: string;
}

export interface IQuery {
  [key: string]: string | string[];
}

export interface IParams {
  [key: string]: string;
}
