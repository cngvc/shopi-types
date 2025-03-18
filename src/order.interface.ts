import { IShippingAddress } from './buyer.interface';
import { ICartItem } from './cart-item.interface';

type OrderType =
  | string
  | number
  | boolean
  | ICartItem[]
  | IShippingAddress
  | IOrderPayment
  | OrderStatus
  | Date
  | undefined;

export enum OrderStatus {
  pending = 'pending',
  confirmed = 'confirmed',
  shipped = 'shipped',
  cancelled = 'cancelled',
  delivered = 'delivered',
}

export interface IOrderPayment {
  paymentPublicId: string;
  method: string;
  status: string;
}

export interface IOrderDocument extends Record<string, OrderType> {
  orderPublicId?: string;
  buyerPublicId: string;
  items: ICartItem[];
  totalAmount?: number;
  shippingFee: number;
  shipping: IShippingAddress;
  payment: IOrderPayment;
  paidAt?: Date | string;
  isPaid?: boolean;
  deliveredAt?: Date | string;
  isDelivered?: boolean;
  status?: OrderStatus;
  notes?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  [key: string]: OrderType;
}
