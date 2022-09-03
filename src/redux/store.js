import { configureStore } from "@reduxjs/toolkit";
import main from './modules/mainSlice'
import myPage from "./modules/myPageSlice";

const store = configureStore({
  reducer: {
    main,
    myPage,
  },
});

export default store;
