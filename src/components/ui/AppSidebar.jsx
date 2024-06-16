"use client";

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";

const AppSidebar = () => {
  return (
    <Sider
      className="!bg-primary"
      // breakpoint="lg"
      // collapsedWidth="0"
      // onBreakpoint={(broken) => {
      //   console.log(broken);
      // }}
      // onCollapse={(collapsed, type) => {
      //   console.log(collapsed, type);
      // }}
    >
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}></Menu>
      Sidebar
    </Sider>
  );
};

export default AppSidebar;
