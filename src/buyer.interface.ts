export interface IBuyerDocument {
  buyerPublicId?: string;
  authId: string;
  storePublicId?: string;
  username: string;
  email: string;
  purchasedProducts: string[];
  shippingAddress?: IShippingAddress;
  payment?: IPayment;
  createdAt?: Date | string;
}

export interface IShippingAddress {
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface IPayment {
  method?: PaymentMethod;
  metadata?: Record<string, any>;
}

export enum PaymentMethod {
  cod = 'cod',
  credit = 'credit',
  paypal = 'paypal',
  stripe = 'stripe',
  crypto = 'crypto',
}
