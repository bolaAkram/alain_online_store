export interface Brand {
  id: number;
  name_english: string;
  name_arabic: string;
  photo_url: string;
  photo: null;
  created_on: null;
  created_by: number;
  updated_on: null;
  updated_by: number;
  deleted_on: null;
  deleted_by: number;
  deleted: boolean;
}

export interface Product {
  id: number;
  brand_photo_url: string;
  brand_name?:string;
  rate: number;
  name_arabic: string;
  name_english: string;
  description_english: string;
  description_arabic: string;
  short_description_arabic: string;
  short_description_english: string;
  price: number;
  weight_kg: number;
  length_cm: number;
  width_cm: number;
  height_cm: number;
  sold_individually: boolean;
  allow_customer_reviews: boolean;
  tags: string;
  gender: number;
  photos: string[];
  photo_url: string;
  created_on: Date;
  created_by: number;
  updated_on: Date;
  updated_by: number;
  deleted_on: Date;
  deleted_by: number;
  deleted: boolean;
  is_new: boolean;
  have_discount: number;
  is_wish_list: boolean;
  quantity: number;
  stock?:number;
  show_stock?:boolean;
  num_of_views?:number;
  show_weight?:boolean;
  show_dimension?:boolean;
  size:string;
}
export interface FilterPayload {
  keyword: string;
  pagesize: number;
  pagenumber: number;
  brands: string[] | [];
  categories: string[];
  pricefrom: number;
  priceto: number;
}

export interface MainCategory {
  id: number;
  name_arabic: string;
  name_english: string;
  photo_url: string;
  show_home: boolean;
  photo: null | string;
  created_on: Date;
  created_by: number;
  updated_on: Date;
  updated_by: number;
  deleted_on: Date;
  deleted_by: number;
  deleted: boolean;
}

export interface FilterResult {
  max_price: number;
  min_price: number;
  pages: number;
  products: Product[];
}


export interface CartDetails{
  total:number;
  subtotal:number;
  shippingFee:number
}


export interface SubCategory {
  id: number;
  name_arabic: null | string;
  name_english: string;
  category_id: number;
  active: boolean;
  show_top_bar: boolean;
  created_on: null;
  created_by: number;
  updated_on: null;
  updated_by: number;
  deleted_on: null;
  deleted_by: number;
  deleted: boolean;
}
export interface HeaderSectionProps {
  name: string;
  icon: string;
  lastItem:boolean;
  subCategories: SubCategory[];
}