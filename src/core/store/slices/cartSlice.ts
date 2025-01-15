import { PayloadAction,createSlice } from "@reduxjs/toolkit";

const initialState ={
    itemIsAdded:false,
  
}

const cartSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setItemIsAdd:(state,action:PayloadAction<boolean>)=>{
            state.itemIsAdded = action.payload
        },
      
    }
})

export const {setItemIsAdd} = cartSlice.actions;

export default cartSlice.reducer;
