import { createSlice } from "@reduxjs/toolkit";

const show = (state, action) => {
  state.type = action.payload.type;
  state.title = action.payload.title;
  state.message = action.payload.message;
  state.isShowing = true;
};

const hide = (state) => {
  state.type = "";
  state.title = "";
  state.message = "";
  state.isShowing = false;
};

const notificationSlice = createSlice({
  name: "notification",
  initialState: { isShowing: false, title: "", message: "", type: "" },
  reducers: { show, hide },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
