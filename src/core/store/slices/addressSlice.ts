import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressEntity } from "../../types/types";


interface InitialState {
    addresses:AddressEntity[]
 
}

const initialState: InitialState = {
    addresses:[]
    
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
   setAddresses:(state:InitialState,action:PayloadAction<AddressEntity[]>)=>{
    state.addresses = action.payload
    // action.payload.forEach((item) => {
    //   if (!state.addresses.some(existingItem => existingItem.id === item.id)) {
    //     state.addresses.push(item);
    //   }
    // });
   }
  },
  
});

export const { setAddresses } = addressSlice.actions;

export default addressSlice.reducer;
