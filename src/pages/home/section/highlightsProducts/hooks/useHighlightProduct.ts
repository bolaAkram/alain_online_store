
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import ApiService from "../../../../../core/utils/api";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../core/store/store";
import { Response } from "../../../../../core/types/types";

interface HighlightProduct {
  id: number;
  rate: number;
  brand_photo_url: string;

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
  sold_individually: false;
  allow_customer_reviews: true;
  tags: string;
  gender: number;

  quantity: number;
  photos: string[];
  created_on: Date;
  created_by: number;
  updated_on: Date;
  updated_by: number;
  deleted_on: Date;
  deleted_by: number;
  deleted: false;
  is_new: boolean;
  have_discount: number;
  is_wish_list: boolean;
  photo_url: string;
  brand_name:string
}

const useHighlightProduct = () => {
  const [highlightProductList, setHighlightProductList] = useState<
    HighlightProduct[]
  >([]);

  const [isLoaded, setIsLoaded] = useState(false);

  const { i18n } = useTranslation();
  const token = useSelector((state: RootState) => state.auth.token);

  const getHighlightProductList = async () => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: Response<HighlightProduct[]> = await new ApiService().get(
        "/Home/Highlights"
      );
      if (response.Success) {
       

        setHighlightProductList(response.Data || []);
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
  let onceCall = true;
  useEffect(() => {
    if (onceCall) {
      if (token !== "") {
        getHighlightProductList();
      }
      onceCall = false;
    }
  }, [token]);
  return {
    highlightProductList,
    i18n,
    isLoaded,
  };
};

export default useHighlightProduct;
