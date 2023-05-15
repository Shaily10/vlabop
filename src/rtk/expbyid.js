import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expById: "",
  currentExp: "",
};

const expByIdSlice = createSlice({
  name: "expbyid",
  initialState,
  reducers: {
    setExpById: (state, action) => {
      state.expById = action.payload;
    },
    setCurrentExp: (state, action) => {
      state.currentExp = action.payload;
    },
  },
});

export default expByIdSlice.reducer;
export const { setExpById,setCurrentExp } = expByIdSlice.actions;

