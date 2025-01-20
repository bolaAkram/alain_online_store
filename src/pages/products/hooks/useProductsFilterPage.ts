// import { useSelector } from "react-redux";
// import { RootState } from "../../../core/store/store";
// import { useEffect, useState } from "react";
// import { FilterPayload, FilterResult } from "../../../core/types/types";
// import { AxiosResponse } from "axios";
// import toast from "react-hot-toast";
// import ApiService from "../../../core/utils/api";
// import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../../core/store/store";

const useProductsFilterPage = () => {
//   const brandFilterList = useSelector(
//     (state: RootState) => state.productFilter.brandFilter
//   );

//   const [isLoaded, setIsLoaded] = useState(false);
// const {state}=useLocation()
  // const [filterRedult, setFilterResult] = useState<FilterResult>();

  // const handleFilter = async () => {
  //   setIsLoaded(true);
  //   try {
  //     setIsLoaded(true);
  //     const payload: FilterPayload = {
  //       keyword: "",
  //       brands: brandFilterList,
  //       categories: [],
  //       pagesize: 100,
  //       pagenumber: 1,
  //       pricefrom: 0,
  //       priceto: 2000,
  //     };

  //     const response: AxiosResponse = await new ApiService().post(
  //       "/api/Product/filter",
  //       payload
  //     );
  //     if (response.data.Success) {
  //       setIsLoaded(false);

  //       setFilterResult(response?.data?.Date);
  //     } else {
  //       toast.error("This didn't work.");
  //       setIsLoaded(false);
  //     }
  //   } catch (error: any) {
  //     console.log("===========error========");
  //     toast.error("This didn't work.");
  //     console.log(error.message);
  //     setIsLoaded(false);
  //   }
  // };




  // let callOnce = true;

  // useEffect(() => {
  //   if (callOnce) {
  //     handleFilter();
  //   }
  // }, [brandFilterList]);

  const ProductList = useSelector((state:RootState)=>state.productFilter.productList)
  const numberOfPages = useSelector((state:RootState)=>state.productFilter.numberOfPages)
  const priceFrom = useSelector((state:RootState)=>state.productFilter.priceFrom)
  const priceTo = useSelector((state:RootState)=>state.productFilter.priceTo)
  return {
    isLoaded :false,
    productList: ProductList,
    numberOfPages: numberOfPages,
    maxPrice: priceTo,
    minPrice: priceFrom,
   
  };
};

export default useProductsFilterPage;
