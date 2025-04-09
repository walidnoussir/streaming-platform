import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
  },
  reducers: {
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
  },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
