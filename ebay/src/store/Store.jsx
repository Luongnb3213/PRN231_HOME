import { configureStore } from "@reduxjs/toolkit";
import Category from "./Category";
import users from "./user";
const store = configureStore({
  reducer: {
    stateCategory: Category,
    user: users
  },
});

export default store;
