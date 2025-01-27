import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {  Product } from "../../types/types";

interface FilterObj {
  keyword: string;
  brands: string[] | [];
  categories: string[];
  pagesize: number;
  pagenumber: number;
  pricefrom: number;
  priceto: number;
}

interface ProductName{
  name:string;
  id:number
}

interface InitialState {
  searchValue: string;
  filterObj: FilterObj;
  brandFilter: string[];
  categoryFilter: number[];
  productList: Product[];
  productNameList:ProductName[],
  pageSize:string;
  priceFrom:number,
  priceTo:number
  numberOfPages:number,
  productTypeFilter:string[]
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
  brandFilter: [],
  categoryFilter: [],
  productTypeFilter: [],
  productList: [],
  productNameList:[],
  pageSize:"10",
  numberOfPages:1,
  priceFrom:0,
  priceTo:0
};

const productFilterSlice = createSlice({
  name: "productFilter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    addBrandToFilter(state: InitialState, action: PayloadAction<string>) {
      const seletedBrand = action.payload;
      if (state.brandFilter.includes(seletedBrand)) {
        state.brandFilter = state.brandFilter.filter(
          (brand) => brand !== seletedBrand
        );
      } else {
        state.brandFilter.push(seletedBrand);
      }
    },
    removeBrandFromFilter: (state, action: PayloadAction<string>) => {
      state.brandFilter = state.brandFilter.filter(
        (brand) => brand !== action.payload
      );
    },
    addCategoryToFilter(state: InitialState, action: PayloadAction<number>) {
      const seletedCategory = action.payload;
      if (state.categoryFilter.includes(seletedCategory)) {
        state.categoryFilter = state.categoryFilter.filter(
          (brand) => brand !== seletedCategory
        );
      } else {
        state.categoryFilter.push(seletedCategory);
      }
    },
    removeCategoryFromFilter: (state, action: PayloadAction<number>) => {
      state.categoryFilter = state.categoryFilter.filter(
        (category) => category !== action.payload
      );
    },
    addProductsTypeToFilter(state: InitialState, action: PayloadAction<string>) {
      const seletedType = action.payload;
      if (state.productTypeFilter.includes(seletedType)) {
        state.productTypeFilter = state.productTypeFilter.filter(
          (type) => type !== seletedType
        );
      } else {
        state.productTypeFilter.push(seletedType);
      }
    },
    removeProductsTypeFromFilter: (state, action: PayloadAction<string>) => {
      state.productTypeFilter = state.productTypeFilter.filter(
        (type) => type !== action.payload
      );
    },

    
    setProductList: (state: InitialState, action: PayloadAction<Product[]>) => {
      state.productList = action.payload;
    },
    setProductNameList:(state: InitialState, action: PayloadAction<ProductName[]>)=>{
      state.productNameList = action.payload
    },
   
    setPageSize:(state:InitialState,action:PayloadAction<string>)=>{
      state.pageSize = action.payload
    },
    setNumberOfPage:(state:InitialState,action:PayloadAction<number>)=>{
      state.numberOfPages = action.payload
    },
    setPriceFrom:(state:InitialState,action:PayloadAction<number>)=>{
      state.priceFrom = action.payload
    },
    setPriceTo:(state:InitialState,action:PayloadAction<number>)=>{
      state.priceTo = action.payload
    },
    setCurrentPage:(state:InitialState,action:PayloadAction<number>)=>{
      state.filterObj.pagenumber = action.payload
    },
     resetFilter : (state: InitialState)=>{
      state.brandFilter = initialState.brandFilter
      state.productTypeFilter = initialState.productTypeFilter
      state.filterObj = initialState.filterObj
      state.productNameList = initialState.productNameList
      state.searchValue = initialState.searchValue
      state.categoryFilter = initialState.categoryFilter
      state.numberOfPages = initialState.numberOfPages
      state.pageSize = initialState.pageSize
      state.priceFrom = initialState.priceFrom
      state.priceTo = initialState.priceTo
    },
  },
});

export const {removeCategoryFromFilter,setCurrentPage, addCategoryToFilter, setNumberOfPage,setPageSize,setPriceFrom,setPriceTo,setSearchValue, addBrandToFilter, removeBrandFromFilter,setProductList,setProductNameList,resetFilter,addProductsTypeToFilter,removeProductsTypeFromFilter } =
  productFilterSlice.actions;

export default productFilterSlice.reducer;
