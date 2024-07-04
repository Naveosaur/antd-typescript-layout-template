import { createSlice } from "@reduxjs/toolkit";

type AuthStateType = {
  isLogin: boolean;
};

const initialState: AuthStateType = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;
