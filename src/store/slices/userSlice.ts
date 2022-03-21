import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

type UserState = {
  user: {
    user: User;
  };
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: UserState) => state.user.user;
export const isSignedIn = (state: UserState) => !!state.user?.user;

export default userSlice.reducer;
