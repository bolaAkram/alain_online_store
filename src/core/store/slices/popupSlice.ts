import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    addressListPopup:{
        show:false
    },
    addAddressPopup:{
        show:false
    }
}

const popupSlice = createSlice({
    name:"popup",
    initialState,
    reducers:{
      showAddressListPopup:(state)=>{
        state.addressListPopup.show = true
      },
      hideAddressListPopup:(state)=>{
        state.addressListPopup.show = false
      },
      showAddAddressPopup:(state)=>{
        state.addAddressPopup.show = true
      },
      hideAddAddressPopup:(state)=>{
        state.addAddressPopup.show = false
      }
    }
})

export const {showAddressListPopup,hideAddressListPopup,showAddAddressPopup,hideAddAddressPopup} = popupSlice.actions;

export default popupSlice.reducer;
