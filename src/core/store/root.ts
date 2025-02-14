import { combineReducers } from "@reduxjs/toolkit";
import configSlice from "./slices/configSlice";
import authSlice from "./slices/authSlice";
import cartSlice from './slices/cartSlice'
import productFilterSlice from './slices/productFilterSlice'
import bannerSlice from './slices/bannerSlice'
import headerSlice from './slices/headerSlice';
import lookupSlice from './slices/lookupSlice';
import addressSlice from './slices/addressSlice';
import popupSlice from  './slices/popupSlice'


export const rootReducer = combineReducers({
    config:configSlice,
    auth:authSlice,
    cart:cartSlice,
    productFilter:productFilterSlice,
    banners:bannerSlice,
    header:headerSlice,
    lookup:lookupSlice,
    address:addressSlice,
    popup:popupSlice
})