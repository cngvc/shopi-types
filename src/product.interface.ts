import { Mixed } from 'mongoose';
import { IRatingCategories } from './review.interface';

export type CreateProductType =
  | string
  | string[]
  | number
  | boolean
  | undefined;

export interface ICreateProduct extends Record<string, CreateProductType> {
  name: string;
  thumb?: string;
  quantity: number;
  description: string;
  isPublished?: boolean;
  price: number;
  tags?: string[];
  categories?: string[];
}

export type ProductType =
  | string
  | string[]
  | number
  | boolean
  | Date
  | IRatingCategories
  | undefined
  | Mixed;

export interface IProductDocument extends Record<string, ProductType> {
  productPublicId?: string;
  storePublicId?: string;
  name: string;
  thumb?: string;
  quantity: number;
  description: string;
  slug?: string;
  isPublished?: boolean;
  ratingsCount?: number;
  ratingSum?: number;
  ratingCategories?: IRatingCategories;
  price: number;
  tags: string[];
  categories: string[];
  createdAt?: Date | string;
  attributes?: Mixed;
  [key: string]: ProductType;
}
