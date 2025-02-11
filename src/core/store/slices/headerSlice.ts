import {  createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SubCategories {
  id: number;
  name_arabic: null | string;
  name_english: string;
  active: boolean;
  show_top_bar: boolean;
}
interface HeaderItems {
   id: number;
  name_arabic: null | string;
  name_english: string;
  icon_url: string;
  show_home: boolean;
  show_top_bar: boolean;
  active: boolean;
  subCategories: SubCategories[];
}
interface InitialState {
  headerItems:HeaderItems[]
 
}

const initialState: InitialState = {
  headerItems:[]
    
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
   setHeaderItems:(state:InitialState,action:PayloadAction<HeaderItems[]>)=>{
    action.payload.forEach((item) => {
      if (!state.headerItems.some(existingItem => existingItem.id === item.id)) {
        state.headerItems.push(item);
      }
    });
   }
  },
  
});

export const { setHeaderItems } = headerSlice.actions;

export default headerSlice.reducer;
