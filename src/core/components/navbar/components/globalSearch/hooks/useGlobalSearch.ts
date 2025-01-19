import { SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setSearchValue } from "../../../../../store/slices/productFilterSlice";
import {  useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../routing/Routes";
import { RootState } from "../../../../../store/store";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import ApiService from "../../../../../utils/api";
import { FilterPayload, Product } from "../../../../../types/types";

interface FilterResult{
  pages:number,
  products:Product[]
  max_price:number,
  min_price:number

}
const useGlobalSearch = () => {
  const storedSearchValue = useSelector(
    (state: RootState) => state.productFilter.searchValue
  );

  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productList, setProductList] = useState<Product[]>([]);
  const [filterResult,setResult]=useState<FilterResult>()
const {pathname}= useLocation()

  const handleSearch = async ({searchValue,goTo}:{ searchValue:SetStateAction<string>,goTo?:string}) => {
    try {
      setIsLoaded(true);
      const payload: FilterPayload = {
        keyword: searchValue.toString(),
        brands: [],
        categories: [],
        pagesize: 100,
        pagenumber: 1,
        pricefrom: 0,
        priceto: 2000,
      };

      const response: AxiosResponse = await new ApiService().post(
        "/api/Product/filter",
        payload
      );
      if (response.data.Success) {
        setProductList(response.data.Data.products);
        setResult(response.data.Data)
        if(goTo)
        navigate(goTo, {
          state: {
            keyword: storedSearchValue,
            filterBody: filterResult,
          },
        });
     
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

  const getResultMenu = (searchValue: SetStateAction<string>)=>{
    handleSearch({searchValue})
  }

  const handleClickToSearch=(searchValue: SetStateAction<string>)=>{
    if(pathname === ROUTES.HOME){
      handleSearch({searchValue,goTo:ROUTES.PRODUCTS_FILTER})
    }else{
      handleSearch({searchValue})
    }

  }

  return {

    handleSearch,
    productList,
    navigate,
    isLoaded,
    filterResult,
    dispatch,
    storedSearchValue,
    getResultMenu,
    handleClickToSearch
  };
};

export default useGlobalSearch;
