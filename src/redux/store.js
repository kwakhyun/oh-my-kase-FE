import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import info from './modules/infoSlice'
const rootReducer = combineReducers({
  info: info
});
const store = configureStore({
  reducer: rootReducer
});
export default store;
