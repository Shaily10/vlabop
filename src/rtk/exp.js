import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allExp: [],
};

const allExpSlice = createSlice({
  name: "exp",
  initialState,
  reducers: {
    setAllExp: (state, action) => {
      state.allExp = action.payload;
    },
  },
});

export default allExpSlice.reducer;
export const { setAllExp } = allExpSlice.actions;
