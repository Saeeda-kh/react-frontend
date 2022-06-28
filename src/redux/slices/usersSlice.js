import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },

    delUser: (state, action) => {
      return state.filter((_, i) => i !== action.payload);
    },
  },
});

export const { setUsers, delUser } = usersSlice.actions;
export default usersSlice.reducer;
