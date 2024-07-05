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
      state.isLogin = action.payload.isLogin;
    },
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
