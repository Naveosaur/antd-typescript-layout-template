// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import SidebarSlices from "./Slices/SidebarSlices";

const store = configureStore({
  reducer: {
    sider: SidebarSlices,
  },
});

export default store;
