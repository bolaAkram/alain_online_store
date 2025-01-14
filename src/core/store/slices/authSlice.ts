import { PayloadAction,createSlice } from "@reduxjs/toolkit";

const initialState ={
    token:"",
    isloggedIn:false
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setGuestToken:(state,action:PayloadAction<string>)=>{
            state.token = action.payload
        },
        setIsloggedIn:(state,action:PayloadAction<boolean>)=>{
            state.isloggedIn = action.payload
        }
    }
})

export const {setGuestToken,setIsloggedIn} = authSlice.actions;

export default authSlice.reducer;
