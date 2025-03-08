import { ObjectId } from 'mongoose';
import { IRatingCategories } from './review.interface';

export interface IStoreDocument {
  _id?: ObjectId | string;
  name: string;
  ownerId?: string;
  authOwnerId?: string;
  username?: string;
  email?: string;
  description: string;
  ratingsCount?: number;
  ratingSum?: number;
  ratingCategories?: IRatingCategories;
  socialLinks: string[];
  completedOrders?: number;
  cancelledOrders?: number;
  totalEarnings?: number;
  totalProducts?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
