import { combineReducers } from "@reduxjs/toolkit";
import configSlice from "./slices/configSlice";
import authSlice from "./slices/authSlice";
import cartSlice from './slices/cartSlice'
export const rootReducer = combineReducers({
    config:configSlice,
    auth:authSlice,
    cart:cartSlice
})