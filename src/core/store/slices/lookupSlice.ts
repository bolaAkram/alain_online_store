import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CityEntity, EmirateEntity } from "../../types/types";

interface InitialState {
    emirates:EmirateEntity[]
    Cities:CityEntity[]
}

const initialState: InitialState = {
    emirates:[],
    Cities:[]
};

const lookupSlice = createSlice({
  name: "lookup",
  initialState,
  reducers: {
   setEmirates:(state:InitialState,action:PayloadAction<EmirateEntity[]>)=>{
    action.payload.forEach((item) => {
      if (!state.emirates.some(existingItem => existingItem.id === item.id)) {
        state.emirates.push(item);
      }
    });
   },
   setCities:(state:InitialState,action:PayloadAction<CityEntity[]>)=>{
   state.Cities = action.payload
   }
  },
  
});

export const { setEmirates,setCities } = lookupSlice.actions;

export default lookupSlice.reducer;
