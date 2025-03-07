import { ObjectId } from 'mongoose';

export interface IBuyerDocument {
  _id?: string | ObjectId;
  authId?: string;
  storeId?: string;
  username?: string;
  email?: string;
  purchasedProducts: string[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
