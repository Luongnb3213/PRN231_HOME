import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: { parentName: "" },
  reducers: {
    setParentCategory(state, action) {
      console.log(action);

      state.parentName = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
