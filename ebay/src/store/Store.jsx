import { configureStore } from "@reduxjs/toolkit";
import Category from "./Category";
import users from "./user";
import carts from "./Cart";
const store = configureStore({
  reducer: {
    stateCategory: Category,
    user: users,
    cart: carts
  },
});

export default store;
