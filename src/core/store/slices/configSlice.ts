import { PayloadAction,createSlice } from "@reduxjs/toolkit";

const initialState ={
    start:false
}

const configSlice = createSlice({
    name:"config",
    initialState,
    reducers:{
        setStart:(state,action:PayloadAction<boolean>)=>{
            state.start = action.payload
        }
    }
})

export const {setStart} = configSlice.actions;

export default configSlice.reducer;
