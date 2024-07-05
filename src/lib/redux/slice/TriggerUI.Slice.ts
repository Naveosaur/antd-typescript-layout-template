import { createSlice } from "@reduxjs/toolkit";

type TriggerUIStateType = {
  toggleProfile: boolean;
  toggleNotif: boolean;
  toggleSidebar: boolean;
};

const initialState: TriggerUIStateType = {
  toggleProfile: false,
  toggleNotif: false,
  toggleSidebar: false,
};

export const triggerUISlice = createSlice({
  name: "triggerUI",
  initialState,
  reducers: {
    toggleProfile: (state, action) => {
      state.toggleProfile = action.payload;
    },
    toggleNotif: (state, action) => {
      state.toggleNotif = action.payload;
    },
    toggleSidebar: (state, action) => {
      state.toggleSidebar = action.payload;
    },
  },
});

export const { toggleNotif, toggleProfile, toggleSidebar } = triggerUISlice.actions;
export const triggerUIReducer = triggerUISlice.reducer;
