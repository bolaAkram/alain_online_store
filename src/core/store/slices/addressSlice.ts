import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddressEntity } from "../../types/types";

interface InitialState {
  addresses: AddressEntity[];
  addressDetails: AddressEntity;
}

const initialState: InitialState = {
  addresses: [],
  addressDetails: {
    id: 0,
    building: "",
    apartment: "",
    floor: "",
    street: "",
    landmark: "",
    city_id: 0,
    emirate_id: 0,
    user_id: 0,
    is_default: false,
  },
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddresses: (
      state: InitialState,
      action: PayloadAction<AddressEntity[]>
    ) => {
      state.addresses = action.payload;
      // action.payload.forEach((item) => {
      //   if (!state.addresses.some(existingItem => existingItem.id === item.id)) {
      //     state.addresses.push(item);
      //   }
      // });
    },
    setAddressDetails: (state, action: PayloadAction<AddressEntity>) => {
      state.addressDetails = action.payload;
    },
    resetAddressDetails: (state) => {
      state.addressDetails = initialState.addressDetails
    }
  },
});

export const { setAddresses,resetAddressDetails,setAddressDetails } = addressSlice.actions;

export default addressSlice.reducer;
