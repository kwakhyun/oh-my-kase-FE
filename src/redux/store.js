import { configureStore } from "@reduxjs/toolkit";
import myPage from "./modules/myPageSlice";

const store = configureStore({
  reducer: {
    myPage,
  },
});

export default store;
