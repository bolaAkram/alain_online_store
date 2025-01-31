import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ApiService from "../../../core/utils/api";
import { Product } from "../../../core/types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";

interface SelectedCategory {
  id: number;
  name_arabic: null | string;
  name_english: string;
  icon_url: string;
  show_home: boolean;
  show_top_bar: boolean;
  active: boolean;
  products: Product[];
}
const useHome = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>();

  const getSelectedCategory = async () => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: AxiosResponse = await new ApiService().get(
        "/Home/SelectedCategory"
      );
      if (response.data.Success) {
        setSelectedCategory(response.data.Data || []);
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
      if (token !== "") {
        getSelectedCategory();
      }
      onceCall = false;
    }
  }, [token]);
  return {
    isLoaded,
    selectedCategory,
  };
};

export default useHome;
