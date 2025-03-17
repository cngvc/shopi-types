import { IPayment, IShippingAddress } from './buyer.interface';

type OrderType =
  | string
  | number
  | IOrderItem[]
  | IShippingAddress
  | IPayment
  | OrderStatus
  | Date
  | undefined;

export interface IOrderItem {
  productPublicId: string;
  quantity: number;
  price: number;
}

export enum OrderStatus {
  pending = 'pending',
  confirmed = 'confirmed',
  shipped = 'shipped',
  cancelled = 'cancelled',
  delivered = 'delivered',
}

export interface IOrderDocument extends Record<string, OrderType> {
  orderPublicId?: string;
  buyerPublicId: string;
  items: IOrderItem[];
  totalAmount?: number;
  shippingFee: number;
  shipping: IShippingAddress;
  payment: IPayment;
  paidAt?: Date | string;
  status?: OrderStatus;
  notes?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  [key: string]: OrderType;
}
