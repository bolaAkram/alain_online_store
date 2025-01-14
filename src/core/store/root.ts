import { combineReducers } from "@reduxjs/toolkit";
import configSlice from "./slices/configSlice";
import authSlice from "./slices/authSlice";

export const rootReducer = combineReducers({
    config:configSlice,
    auth:authSlice
})