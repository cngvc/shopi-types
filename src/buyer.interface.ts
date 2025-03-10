export interface IBuyerDocument {
  buyerPublicId?: string;
  authId: string;
  storePublicId?: string;
  username: string;
  email: string;
  purchasedProducts: string[];
  shippingAddress?: IShippingAddress;
  createdAt?: Date | string;
}

export interface IShippingAddress {
  shippingAddressPublicId?: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}
