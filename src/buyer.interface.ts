export interface IBuyerDocument {
  buyerPublicId?: string;
  authId: string;
  storePublicId?: string;
  username: string;
  email: string;
  purchasedProducts: string[];
  shippingAddress?: IShippingAddress;
  payment: IPayment;
  createdAt?: Date | string;
}

export interface IShippingAddress {
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface IPayment {
  method?: string;
  metadata?: Record<string, any>;
}
