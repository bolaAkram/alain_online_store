import { combineReducers } from "@reduxjs/toolkit";
import configSlice from "./slices/configSlice";

export const rootReducer = combineReducers({
    config:configSlice
})