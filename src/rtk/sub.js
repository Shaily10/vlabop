import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sub: "",
};

const subSlice = createSlice({
  name: "sub",
  initialState,
  reducers: {
    setSub: (state, action) => {
      state.sub = action.payload;
    },
  },
});

export default subSlice.reducer;
export const { setSub } = subSlice.actions;
