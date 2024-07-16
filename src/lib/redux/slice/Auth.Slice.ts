import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

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
    setLogin: (state, action) => {
      console.log("action", action.payload);
      state.isLogin = action.payload.isLogin;
      state.userCreds = action.payload.userCreds;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.isLogin = false;
      state.userCreds = undefined;
      state.token = undefined;

      Cookies.remove("token");
      Cookies.remove("user");
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;
