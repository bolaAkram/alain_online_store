import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import ApiService from "../../../../../core/utils/api";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../core/store/store";
import { MainCategory } from "../../../../../core/types/types";


const useShopByCategory = (setCategory:Dispatch<SetStateAction<MainCategory[]>>) => {
  const [shopByCategoryList, setShopByCategoryList] = useState<MainCategory[]>(
    []
  );

  const [isLoaded, setIsLoaded] = useState(false);

  const { i18n } = useTranslation();
  const token = useSelector((state: RootState) => state.auth.token);

  const getShopByCategoryList = async () => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: AxiosResponse = await new ApiService().get(
        "/api/Home/MainCategory"
      );
      if (response.data.Success) {
   
        setCategory(response.data.Data)
        setShopByCategoryList(response.data.Data || []);
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
        getShopByCategoryList();
      }
      onceCall = false;
    }
  }, [token]);
  return {
    shopByCategoryList,

    isLoaded,
    i18n,
  };
};

export default useShopByCategory;
