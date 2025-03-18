export interface ICartItem {
  productPublicId: string;
  quantity: number;

  slug?: string;
  price?: number;
  name?: string;
  thumb?: string;
}
