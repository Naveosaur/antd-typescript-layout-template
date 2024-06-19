// store/siderSlice.js
import { createSlice } from "@reduxjs/toolkit";

type SiderSliceType = {
  collapsed: boolean;
};

const initialState: SiderSliceType = {
  collapsed: false,
};

const siderSlice = createSlice({
  name: "sider",
  initialState,
  reducers: {
    toggleCollapse: (state) => {
      state.collapsed = !state.collapsed;
    },
    setCollapse: (state, action) => {
      state.collapsed = action.payload;
    },
  },
});

export const { toggleCollapse, setCollapse } = siderSlice.actions;
export default siderSlice.reducer;
