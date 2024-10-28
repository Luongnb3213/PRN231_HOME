import { configureStore } from "@reduxjs/toolkit";
import Category from "./Category";

const store = configureStore({
  reducer: {
    stateCategory: Category,
  },
});

export default store;
