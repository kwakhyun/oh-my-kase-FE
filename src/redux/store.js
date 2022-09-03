import { configureStore } from "@reduxjs/toolkit";
import main from './modules/mainSlice'

const store = configureStore({
  reducer: {main}
});
export default store;
