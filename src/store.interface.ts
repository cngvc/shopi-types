export interface IStoreDocument {
  storePublicId?: string;
  name: string;
  username?: string;
  email?: string;
  ownerPublicId?: string;
  ownerAuthId?: string;
  description: string;
  socialLinks: string[];
  completedOrders?: number;
  cancelledOrders?: number;
  totalEarnings?: number;
  totalProducts?: number;
  createdAt?: Date | string;
}
