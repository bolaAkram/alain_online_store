import { SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setSearchValue } from "../../../../../store/slices/productFilterSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../routing/Routes";
import { RootState } from "../../../../../store/store";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import ApiService from "../../../../../utils/api";
import { FilterPayload, Product } from "../../../../../types/types";
import {
  setNumberOfPage,
  setPageSize,
  setPriceFrom,
  setPriceTo,
  setProductList,
  setProductNameList,
} from "../../../../../store/slices/productFilterSlice";

interface FilterResult {
  pages: number;
  products: Product[];
  max_price: number;
  min_price: number;
}
const useGlobalSearch = () => {
  const storedSearchValue = useSelector(
    (state: RootState) => state.productFilter.searchValue
  );

  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [productList, setProductList] = useState<Product[]>([]);
  const productNameList = useSelector(
    (state: RootState) => state.productFilter.productNameList
  );
  const [filterResult, setResult] = useState<FilterResult>();
  const { pathname } = useLocation();
  const brandFilterList = useSelector(
    (state: RootState) => state.productFilter.brandFilter
  );
  const categoryFilter = useSelector(
    (state: RootState) => state.productFilter.categoryFilter
  );
  const pageSize = useSelector(
    (state: RootState) => state.productFilter.pageSize
  );
  const priceFrom = useSelector(
    (state: RootState) => state.productFilter.priceFrom
  );
  const priceTo = useSelector(
    (state: RootState) => state.productFilter.priceTo
  );

  const [suggestionsKeywordList, setSuggestionsKeywordList] = useState<
    { name: string; id: number }[]
  >([]);

  const handleOnChangeInput = async (value: string) => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);
      const payload = {
        keyword: value,
        pagesize: 100,
        pagenumber: 1,
      };
      const response: AxiosResponse = await new ApiService().post(
        "/api/Product/FilterSuggestions",
        payload
      );
      if (response.data.Success) {
        const suggestionObject = response.data.Data.map(
          (name: string, i: number) => {
            return {
              key: i,
              label:name,
            };
          }
        );

        setSuggestionsKeywordList(suggestionObject);

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

  const handleSelectResult = (id:any) => {
    console.log(id);
    const getSearchValue = suggestionsKeywordList.filter((item)=>{

      return item.id === id
    })[0]

    console.log({getSearchValue});
    
    navigate(ROUTES.PRODUCTS_FILTER);
  };
  return {
    productNameList,
    navigate,
    isLoaded,
    filterResult,
    dispatch,
    storedSearchValue,
    handleOnChangeInput,
    suggestionsKeywordList,
    handleSelectResult,
  };
};

export default useGlobalSearch;
