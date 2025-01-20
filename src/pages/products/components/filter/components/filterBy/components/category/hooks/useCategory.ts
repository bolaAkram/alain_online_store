import { useEffect, useState } from "react";
import { MainCategory } from "../../../../../../../../../core/types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../../../../core/store/store";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import ApiService from "../../../../../../../../../core/utils/api";


const useCategory = () => {
    const [CategoryList, setCategoryList] = useState<MainCategory[]>(
        []
      );
      const dispatch = useDispatch()

  const token = useSelector((state: RootState) => state.auth.token);

      const [isLoaded, setIsLoaded] = useState(false);

      const getShopByCategoryList = async () => {
        setIsLoaded(true);
        try {
          setIsLoaded(true);
    
          const response: AxiosResponse = await new ApiService().get(
            "/api/Home/MainCategory"
          );
          if (response.data.Success) {
            console.log(response.data.Data);
    
            setCategoryList(response.data.Data || []);
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

      const selectedCategory:string[] = useSelector((state:RootState)=>state.productFilter.categoryFilter)

  return{
    CategoryList,
    isLoaded,
    selectedCategory,
    dispatch
  }
}

export default useCategory
