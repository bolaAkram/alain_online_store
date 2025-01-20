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
  const pageSize = useSelector((state:RootState)=>state.productFilter.pageSize)
  const priceFrom = useSelector((state:RootState)=>state.productFilter.priceFrom)
  const priceTo = useSelector((state:RootState)=>state.productFilter.priceTo)
  const handleSearch = async ({
    searchValue,
    goTo,
  }: {
    searchValue: SetStateAction<string>;
    goTo?: string;
  }) => {
    try {
      setIsLoaded(true);
      const payload: FilterPayload = {
        keyword: searchValue.toString(),
        brands: brandFilterList,
        categories: [],
        pagesize: pageSize,
        pagenumber: 1,
        pricefrom: priceFrom,
        priceto: priceTo,
      };

      const response: AxiosResponse = await new ApiService().post(
        "api/Product/filter",
        payload
      );
      if (response.data.Success) {
        setResult(response.data.Data);
        dispatch(setProductList(response.data.Data.products));
        const productNameList = response.data.Data.products.map(
          (product: Product) => {
            return {
              name: product.name_english,
              id: product.id,
            };
          }
        );
        dispatch(setProductNameList(productNameList));
        dispatch(setPageSize(10));
        dispatch(setNumberOfPage(response.data.Data.pages));
        dispatch(setPriceFrom(response.data.Data.min_price))
        dispatch(setPriceTo(response.data.Data.max_price))
        if (goTo)
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

  const getResultMenu = (searchValue: SetStateAction<string>) => {
    handleSearch({ searchValue });
  };

  const handleClickToSearch = (searchValue: SetStateAction<string>) => {
    if (pathname === ROUTES.HOME) {
      handleSearch({ searchValue, goTo: ROUTES.PRODUCTS_FILTER });
    } else {
      handleSearch({ searchValue });
    }
  };

  return {
    handleSearch,
    productNameList,
    navigate,
    isLoaded,
    filterResult,
    dispatch,
    storedSearchValue,
    getResultMenu,
    handleClickToSearch,
  };
};

export default useGlobalSearch;
