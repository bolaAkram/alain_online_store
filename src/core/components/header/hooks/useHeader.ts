import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Response } from "../../../types/types";
import ApiService from "../../../utils/api";
import { setHeaderItems } from "../../../store/slices/headerSlice";
interface SubCategories {
  id: number;
  name_arabic: null | string;
  name_english: string;
  active: boolean;
  show_top_bar: boolean;
}
interface TopBarCategory {
  id: number;
  name_arabic: null | string;
  name_english: string;
  icon_url: string;
  show_home: boolean;
  show_top_bar: boolean;
  active: boolean;
  subCategories: SubCategories[];
}
const useHeader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const dispatch = useDispatch();
  const storedHeaderItems = useSelector((state:RootState)=>state.header.headerItems)
  const getTopBarCategory = async () => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);

      const response: Response<TopBarCategory[]> = await new ApiService().get(
        "/Home/TopBar"
      );
      if (response.Success) {
        
        dispatch(setHeaderItems(response.Data))
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
        if(storedHeaderItems.length === 0){
           getTopBarCategory();
        }
       
      }

      onceCall = false;
    }
  }, [token]);
  return {
    isLoaded,
    storedHeaderItems
  };
};

export default useHeader;
