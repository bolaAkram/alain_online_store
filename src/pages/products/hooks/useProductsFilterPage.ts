import { useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";
import { useEffect, useState } from "react";
import { FilterPayload, Product } from "../../../core/types/types";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import ApiService from "../../../core/utils/api";
import { useLocation } from "react-router-dom";

interface FilterResult {
  pages: number;
  min_price: number;
  max_price: number;
  products: Product[];
}
const useProductsFilterPage = () => {
  const storedSearchValue = useSelector((state:RootState)=>state.productFilter.searchValue)
  const [isLoaded, setIsLoaded] = useState(false);
  const [filterResult, setFilterResult] = useState<FilterResult>({
    max_price:2000,
    min_price:0,
    pages:1,
    products:[]
  });

  const {state}=useLocation()
  
 
  const priceFrom = useSelector(
    (state: RootState) => state.productFilter.priceFrom
  );
  const priceTo = useSelector(
    (state: RootState) => state.productFilter.priceTo
  );
  const storedBrands = useSelector(
    (state: RootState) => state.productFilter.brandFilter
  );
  const storedCategories = useSelector(
    (state: RootState) => state.productFilter.categoryFilter
  );
  const storedPagesize = useSelector(
    (state: RootState) => state.productFilter.pageSize
  );
  const currentPage = useSelector(
    (state: RootState) => state.productFilter.filterObj.pagenumber
  );
  const handleProductFilter = async () => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);
      const payload: FilterPayload = {
        keyword: storedSearchValue,
        brands: storedBrands,
        categories: storedCategories,
        pagesize: +storedPagesize,
        pagenumber: currentPage,
        pricefrom: priceFrom,
        priceto: priceTo,
      };

      const response: AxiosResponse = await new ApiService().post(
        "/Product/filter",
        payload
      );
      if (response.data.Success) {
        setIsLoaded(false);
       
        setFilterResult(response.data.Data);
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
      handleProductFilter();
      
      
      onceCall = false;
    }
  }, [storedBrands,storedCategories,storedPagesize,currentPage,priceFrom,priceTo]);



  return {
    isLoaded,
    productList: filterResult.products,
    numberOfPages: filterResult.pages,
    maxPrice: filterResult.max_price,
    minPrice: filterResult.min_price,
    state
  };
};

export default useProductsFilterPage;
