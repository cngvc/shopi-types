export interface IReviewMessageDetails {
  productId?: string;
  reviewerId?: string;
  storeId?: string;
  review?: string;
  rating?: number;
  orderId?: string;
  createdAt?: string;
  type: string;
}

export interface IReviewDocument {
  _id?: string;
  productId: string;
  reviewerId: string;
  orderId: string;
  storeId: string;
  review: string;
  rating: number;
  createdAt: Date | string;
  reviewType?: string;
}

export interface IRatingCategoryItem {
  value: number;
  count: number;
}

export interface IRatingCategories {
  five: IRatingCategoryItem;
  four: IRatingCategoryItem;
  three: IRatingCategoryItem;
  two: IRatingCategoryItem;
  one: IRatingCategoryItem;
}
