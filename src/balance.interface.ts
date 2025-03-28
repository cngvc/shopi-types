export interface IBalance {
  id?: string;
  authId: string;
  balance?: number;
  transactions?: IBalanceTransaction[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IBalanceTransaction {
  id: string;
  authId: string;
  amount: number;
  transactionType: BalanceType;
  orderPublicId?: string;
  paymentPublicId?: string;
  balance?: IBalance;
  createdAt?: Date;
}

export enum BalanceType {
  deposit = 'deposit',
  withdraw = 'withdraw',
  order_payment = 'order_payment',
  refund = 'refund',
}

export enum DepositMethod {
  credit = 'credit',
  paypal = 'paypal',
  stripe = 'stripe',
  crypto = 'crypto',
}
