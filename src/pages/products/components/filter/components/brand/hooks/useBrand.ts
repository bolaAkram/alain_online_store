import { useEffect, useState } from "react";
import { Brand } from "../../../../../../../core/types/types";
import toast from "react-hot-toast";
import { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../../core/store/store";
import ApiService from "../../../../../../../core/utils/api";
// import { addBrandToFilter } from "../../../../../../../core/store/slices/productFilterSlice";


const useBrand = () => {
      const [brandList, setBrandList] = useState<Brand[]>([]);
      const [isLoaded, setIsLoaded] = useState(false);
      const [selected,setSelected]=useState(false)
      const dispatch = useDispatch()
      const token = useSelector((state: RootState) => state.auth.token);

      const getBrandList = async () => {
        setIsLoaded(true);
        try {
          setIsLoaded(true);
    
          const response: AxiosResponse = await new ApiService().get(
            "/api/Brand/All"
          );
          if (response.data.Success) {
            console.log(response.data.Data);
    
            setBrandList(response.data.Data || []);
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
            getBrandList();
          }
          onceCall = false;
        }
      }, [token]);

      const [visibleCount, setVisibleCount] = useState(10);

      const selectedBrand:string[] = useSelector((state:RootState)=>state.productFilter.brandFilter)

   
  return {
    isLoaded,
    brandList,
    visibleCount,
    setVisibleCount,
    dispatch,
    selectedBrand,
    selected,setSelected
  }
}

export default useBrand
