import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subapi: "",
};

const subApiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setSubApi: (state, action) => {
      state.subapi = action.payload;
    },
  },
});

export default subApiSlice.reducer;
export const { setSubApi } = subApiSlice.actions;
