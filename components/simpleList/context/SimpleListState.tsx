export interface BaseItem {
  id: string;
  name: string;
  price: number;
}
export interface LineItem extends BaseItem {
  categoryId: string;
}

export interface Category extends BaseItem {
  lineItems: LineItem[];
}

export default interface SimpleListState {
  categories: Category[];
  total: number;
}
