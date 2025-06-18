import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedProducts: []
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    any: () => {}
  }
});

// Action creators are generated for each case reducer function
export const { any } = counterSlice.actions;

export default counterSlice.reducer;
