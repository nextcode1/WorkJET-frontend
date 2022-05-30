import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
