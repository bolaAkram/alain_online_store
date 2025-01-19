import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterPayload } from "../../types/types";

interface InitialState{
  searchValue: string,
  filterObj: {
    keyword: string;
    brands: string[]|[],
    categories: string[],
    pagesize: number,
    pagenumber: number,
    pricefrom: number,
    priceto: number,
  },
  brandFilter:string[]
}


const initialState = {
  searchValue: "",
  filterObj: {
    keyword: "",
    brands: [],
    categories: [],
    pagesize: 100,
    pagenumber: 1,
    pricefrom: 0,
    priceto: 2000,
  },
  brandFilter:[]
};

const productFilterSlice = createSlice({
  name: "productFilter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    // setFilter(state, action: PayloadAction<FilterPayload>) {
    //   state.filterObj = action.payload;
    // },
    addBrandToFilter(state:InitialState, action:PayloadAction<string>){
     const seletedBrand = action.payload
     if(state.brandFilter.includes(seletedBrand)){
      state.brandFilter =  state.brandFilter.filter(brand=>brand!==seletedBrand)
     }else{
      state.brandFilter.push(seletedBrand)
     }

    },
    removeBrandFromFilter: (state, action: PayloadAction<string>) => {
      state.brandFilter = state.brandFilter.filter(brand => brand !== action.payload);
    },
  },
});

export const { setSearchValue,addBrandToFilter ,removeBrandFromFilter} = productFilterSlice.actions;

export default productFilterSlice.reducer;
