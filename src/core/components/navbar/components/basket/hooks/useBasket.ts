import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import ApiService from "../../../../../utils/api";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { CartDetails, Response } from "../../../../../types/types";
interface Product {
  id: number;
  rate: number;
  brand_id: number;
  brand_name: string;
  brand_photo_url: string;
  name_arabic: null;
  name_english: string;
  description_english: null;
  description_arabic: null;
  short_description_arabic: null;
  short_description_english: string;
  price: number;
  weight_kg: number;
  length_cm: number;
  width_cm: number;
  height_cm: number;
  sold_individually: boolean;
  allow_customer_reviews: boolean;
  tags: null;
  gender: number;
  is_wish_list: boolean;
  quantity: number;
  have_discount: number;
  is_new: boolean;
  photos: null;
  photo_url: string;
  created_on: null;
  created_by: number;
  updated_on: null;
  updated_by: number;
  deleted_on: null;
  deleted_by: number;
  deleted: boolean;
}


interface Cart {
  count: number;
  products: Product[];
  subtotal: number;
  shippingFee: number;
  total: number;
}

const useBasket = () => {
  const [isOpenShoppingCard, setIsOpenShoppingCard] = useState(false);

  const [productCount, setProductCount] = useState(0);

  const [productList, setProductList] = useState<Product[]>([]);
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  const [isLoaded, setIsLoaded] = useState(false);
  const numberOfProductsIsChange = useSelector(
    (state: RootState) => state.cart.itemIsAdded
  );
  const [cartDetails, setCartDetails] = useState<CartDetails>();
  const getCart = async () => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: Response<Cart> = await new ApiService().get("/Cart/Get");
      if (response.Success) {
        setCartDetails({
          total: response.Data.total,
          subtotal: response.Data.subtotal,
          shippingFee: response.Data.shippingFee,
        });
        setProductList(response.Data.products || []);
        setNumberOfProducts(response.Data.count || 0);
        setIsLoaded(false);
      } else {
        toast.error("This didn't work.");
        setIsLoaded(false);
      }
    } catch (error: any) {
      console.log("===========error========");
      toast.error("This didn't work.");
      console.log(error.message);
      setIsLoaded(false);
    }
  };

  const token = useSelector((state: RootState) => state.auth.token);
  let onceCall = true;
  useEffect(() => {
    if (onceCall && token !== "") {
      getCart();
      onceCall = false;
    }
  }, [numberOfProductsIsChange, token]);

  return {
    productCount,
    setProductCount,
    isOpenShoppingCard,
    setIsOpenShoppingCard,
    productList,
    numberOfProducts,
    isLoaded,
    cartDetails,
  };
};

export default useBasket;
