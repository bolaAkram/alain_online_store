import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../../../../core/store/store";
import { MainCategory, Response } from "../../../../../../../../../core/types/types";
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
    
          const response: Response<MainCategory[]> = await new ApiService().get(
            "/Home/MainCategory"
          );
          if (response.Success) {
       
    
            setCategoryList(response.Data || []);
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

      const selectedCategory:number[] = useSelector((state:RootState)=>state.productFilter.categoryFilter)

  return{
    CategoryList,
    isLoaded,
    selectedCategory,
    dispatch
  }
}

export default useCategory
