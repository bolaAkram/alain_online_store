import { Key,  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setSearchValue } from "../../../../../store/slices/productFilterSlice";
import {  useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../routing/Routes";
import { RootState } from "../../../../../store/store";
import { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import ApiService from "../../../../../utils/api";

import { setSearchValue } from "../../../../../store/slices/productFilterSlice";


const useGlobalSearch = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedSearchValue = useSelector(
    (state: RootState) => state.productFilter.searchValue
  );
  const [searchInputValue, setSearchInputValue] = useState(storedSearchValue);
  const productNameList = useSelector(
    (state: RootState) => state.productFilter.productNameList
  );


 


  const [suggestionsKeywordList, setSuggestionsKeywordList] = useState<
    { name: string; id: number }[]
  >([]);

  const onInputChange = (value: string) => {
    setSearchInputValue(value);
    getFilterSuggestions(value);
  };
  const getFilterSuggestions = async (value: string) => {
    setIsLoaded(true);
    try {
      setIsLoaded(true);
      const payload = {
        keyword: value,
        pagesize: 10,
        pagenumber: 1,
      };
      const response: AxiosResponse = await new ApiService().post(
        "/Product/FilterSuggestions",
        payload
      );
      if (response.data.Success) {
        const suggestionObject = response.data.Data.map(
          (name: string, i: number) => {
            return {
              id: i,
              name: name,
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

  const handleClickSearch = (searchValue: string) => {
    dispatch(setSearchValue(searchValue));
    navigate(ROUTES.PRODUCTS_FILTER);
  };

  const handleSelectResult = (searchValue: Key | null) => {
    navigate(ROUTES.PRODUCTS_FILTER);

    dispatch(setSearchValue(searchValue as string));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };
  return {
    productNameList,
    navigate,
    isLoaded,
    dispatch,
    onInputChange,
    suggestionsKeywordList,
    handleSelectResult,
    handleClickSearch,
    searchInputValue,
    onSubmit,
  };
};

export default useGlobalSearch;
