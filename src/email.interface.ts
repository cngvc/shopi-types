export interface IEmailLocals {
  username?: string;
  verifyLink?: string;
  resetLink?: string;
  orderPublicId?: string;
  totalAmount?: string;
  shippingAddress?: string;
  shippingCity?: string;
  shippingCountry?: string;
  orderLink?: string;
  createdAt?: string;
  [key: string]: string | undefined;
}
