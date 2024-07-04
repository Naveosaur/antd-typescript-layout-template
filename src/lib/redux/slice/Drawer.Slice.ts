import { createSlice } from "@reduxjs/toolkit";

type drawerStateType = {
  openProfile: boolean;
  openNotification: boolean;
};

const initialState: drawerStateType = {
  openProfile: false,
  openNotification: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setOpenProfile: (state, action) => {
      state.openProfile = action.payload;
    },
    setOpenNotification: (state, action) => {
      state.openNotification = action.payload;
    },
  },
});

export const { setOpenNotification, setOpenProfile } = drawerSlice.actions;
export const drawerReducer = drawerSlice.reducer;
