import { PayloadAction,createSlice } from "@reduxjs/toolkit";

const initialState ={
    token:""
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setGuestToken:(state,action:PayloadAction<string>)=>{
            state.token = action.payload
        }
    }
})

export const {setGuestToken} = authSlice.actions;

export default authSlice.reducer;
