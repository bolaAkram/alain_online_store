import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ApiService from "../../../utils/api";
import { HeaderSectionProps, SubCategory } from "../../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface TopBarCategory {
  id: number;
  name_arabic: null|string;
  name_english: string;
  icon_url: string;
  show_home: boolean;
  show_top_bar: boolean;
  active: boolean;
  subCategories:SubCategory[]
}
const useHeader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [topBarCategory, setTopBarCategory] = useState<TopBarCategory[]>([]);
  const getTopBarCategory = async () => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: AxiosResponse = await new ApiService().get(
        "/Home/TopBar"
      );
      if (response.data.Success) {
        setTopBarCategory(response.data.Data || []);
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
    if (onceCall) {
      getTopBarCategory();
      onceCall = false;
    }
  }, [token]);
  return {
    isLoaded,
    topBarCategory,
  };
};

export default useHeader;
