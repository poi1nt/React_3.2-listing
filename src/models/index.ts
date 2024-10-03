export interface IItem {
  listing_id: number;
  url?: string;
  MainImage?: IMainImage;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

export interface IMainImage {
  url_570xN?: string;
}