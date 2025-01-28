import { PayloadAction,createSlice } from "@reduxjs/toolkit";

interface UserData{
    email:string,
    mobile:string,
    role:string,
    mobile_verified:boolean
}
const initialState ={
    token:"",
    isloggedIn:false,
    userData:{
        email:"",
        mobile:"",
        role:"",
        mobile_verified:false
    }
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setGuestToken:(state,action:PayloadAction<string>)=>{
            state.token = action.payload
        },
        setUserToken:(state,action:PayloadAction<string>)=>{
            state.token = action.payload
        },
        setUserData:(state,action:PayloadAction<UserData>)=>{
            state.userData = action.payload
        },
        setIsloggedIn:(state,action:PayloadAction<boolean>)=>{
            state.isloggedIn = action.payload
        },
       
        setLogout: () => initialState
    }
})

export const {setGuestToken,setIsloggedIn,setUserToken,setUserData,setLogout} = authSlice.actions;

export default authSlice.reducer;
