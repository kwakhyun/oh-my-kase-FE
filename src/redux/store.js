import { configureStore } from "@reduxjs/toolkit";
import main from './modules/mainSlice'
import myPage from "./modules/myPageSlice";
import main from './modules/mainSlice'
const store = configureStore({
  reducer: {
    main,
    myPage,
  },
});

export default store;
