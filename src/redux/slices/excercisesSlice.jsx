import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const excercisesSlice = createSlice({
  name: "excercises",
  initialState,
  reducers: {
    setExcercises: (state, action) => {
      return action.payload;
    },

    delExcercise: (state, action) => {
      return state.filter((_, i) => i !== action.payload);
    },
  },
});

export const { setExcercises, delExcercise } = excercisesSlice.actions;
export default excercisesSlice.reducer;
