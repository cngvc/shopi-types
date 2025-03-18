import { PaymentMethod } from './payment.interface';

export interface IBuyerDocument {
  buyerPublicId?: string;
  authId: string;
  storePublicId?: string;
  username: string;
  email: string;
  purchasedProducts: string[];
  shippingAddress?: IShippingAddress;
  payment?: IBuyerPayment;
  createdAt?: Date | string;
}

export interface IShippingAddress {
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface IBuyerPayment {
  method?: PaymentMethod;
}
