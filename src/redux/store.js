import { configureStore } from "@reduxjs/toolkit";
import myPage from "./modules/myPageSlice";
import main from './modules/mainSlice'
const store = configureStore({
  reducer: {
    main,
    myPage,
  },
});

export default store;
