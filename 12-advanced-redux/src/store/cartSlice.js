import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isShowing: true },
  reducers: {
    toggle(state) {
      state.isShowing = !state.isShowing;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
