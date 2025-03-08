export interface IReviewMessageDetails {
  productPublicId?: string;
  reviewerPublicId?: string;
  storePublicId?: string;
  review?: string;
  rating?: number;
  orderPublicId?: string;
  createdAt?: string;
  type: string;
}

export interface IReviewDocument {
  reviewPublicId: string;
  productPublicId: string;
  reviewerPublicId: string;
  orderPublicId: string;
  storePublicId: string;
  review: string;
  rating: number;
  createdAt: Date | string;
  type?: string;
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
