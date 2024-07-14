import { createSlice } from "@reduxjs/toolkit";

type AuthStateType = {
  isLogin: boolean;
  userCreds?: {};
  token?: string;
};

const initialState: AuthStateType = {
  isLogin: false,
  userCreds: undefined,
  token: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      console.log("action", action.payload);
      state.isLogin = action.payload.isLogin;
      state.userCreds = action.payload.userCreds;
      state.token = action.payload.token;
    },
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
