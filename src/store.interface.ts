import { ObjectId } from 'mongoose';
import { IRatingCategories } from './review.interface';

export interface IStoreDocument {
  _id?: string | ObjectId;
  name: string;
  ownerId?: string;
  username?: string;
  email?: string;
  description: string;
  ratingsCount?: number;
  ratingSum?: number;
  ratingCategories?: IRatingCategories;
  responseTime: number;
  socialLinks: string[];
  completedOrders?: number;
  cancelledOrders?: number;
  totalEarnings?: number;
  totalProducts?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
