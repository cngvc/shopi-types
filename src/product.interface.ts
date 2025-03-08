import { ObjectId } from 'mongoose';
import { IRatingCategories } from './review.interface';

export type CreateProductType =
  | string
  | string[]
  | number
  | unknown
  | undefined;

export interface ICreateProduct extends Record<string, CreateProductType> {
  storeId?: string;
  name: string;
  thumb?: string;
  quantity?: number;
  description: string;
  isPublished?: boolean;
  price: number;
  tags?: string[];
  categories: string[];
}

export type ProductType =
  | ObjectId
  | string
  | string[]
  | number
  | boolean
  | Date
  | IRatingCategories
  | undefined;

export interface IProductDocument extends Record<string, ProductType> {
  _id?: ObjectId | string;
  id?: string;
  storeId?: ObjectId | string;
  name: string;
  thumb?: string;
  quantity?: number;
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
  [key: string]: ProductType;
}
