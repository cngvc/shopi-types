export interface IPaymentDocument {
  paymentPublicId?: string;
  orderPublicId: string;
  transactionId?: string;
  paymentIntentId?: string;
  method?: PaymentMethod;
  totalAmount?: number;
  currency: string;
  status?: string;
  metadata?: Record<string, any>;
  createdAt?: string;
  updatedAt?: string;
}

export enum PaymentMethod {
  cod = 'cod',
  credit = 'credit',
  paypal = 'paypal',
  stripe = 'stripe',
  crypto = 'crypto',
}
