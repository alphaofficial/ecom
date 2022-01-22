import { NextApiRequest } from "next";
import { Db, MongoClient } from "mongodb";
export interface IProduct {
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

export interface IRequest extends NextApiRequest {
  db: Db;
  dbClient: MongoClient;
}
