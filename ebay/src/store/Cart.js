
import { createSlice } from "@reduxjs/toolkit";

var initialStateCart =  localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];


const cartSlice = createSlice({
    name: "cart",
    initialState: { cart: initialStateCart },
    reducers: {
      setCart(state, action) {
        state.cart = action.payload;
      },
  
      increaseQuantity(state, action) {
        const { id } = action.payload;
        const item = state.cart.find((product) => product.id === id);
        if (item) {
          item.quantity += 1;
        } else {
          state.cart.push({ id, quantity: 1 });
        }
      },
  
      decreaseQuantity(state, action) {
        const { id } = action.payload;
        const item = state.cart.find((product) => product.id === id);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        } else if (item && item.quantity === 1) {
          state.cart = state.cart.filter((product) => product.id !== id);
        }
      },
  

      removeItem(state, action) {
        const { id } = action.payload;
        state.cart = state.cart.filter((product) => product.id !== id);
      },
    },
  });

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;

