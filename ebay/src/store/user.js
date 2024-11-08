
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;

