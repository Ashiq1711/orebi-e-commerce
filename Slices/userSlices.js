import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: localStorage.getItem('userinfo')
      ? JSON.parse(localStorage.getItem('userinfo'))
      : 0,
  },
  reducers: {
    userlogInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userlogInfo } = userSlice.actions;

export default userSlice.reducer;
