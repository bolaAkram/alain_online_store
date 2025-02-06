import { combineReducers } from "@reduxjs/toolkit";
import configSlice from "./slices/configSlice";
import authSlice from "./slices/authSlice";
import cartSlice from './slices/cartSlice'
import productFilterSlice from './slices/productFilterSlice'
import bannerSlice from './slices/bannerSlice'
export const rootReducer = combineReducers({
    config:configSlice,
    auth:authSlice,
    cart:cartSlice,
    productFilter:productFilterSlice,
    banners:bannerSlice
})