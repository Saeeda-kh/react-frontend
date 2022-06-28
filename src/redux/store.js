// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import excercisesReducer from "./slices/excercisesSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    excercises: excercisesReducer,
  },
});
