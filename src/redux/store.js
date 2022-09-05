import { configureStore } from "@reduxjs/toolkit";
import main from './modules/mainSlice'
import myPage from "./modules/myPageSlice";
import detail from "./modules/detailSlice"

const store = configureStore({
  reducer: {
    main,
    myPage,
    detail,
  },
});

export default store;
