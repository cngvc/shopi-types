export interface IBuyerDocument {
  buyerPublicId?: string;
  authId: string;
  storePublicId: string;
  username: string;
  email: string;
  purchasedProducts: string[];
  createdAt?: Date | string;
}
