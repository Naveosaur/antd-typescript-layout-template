"use client";

import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

const MenuItems: MenuItem[] = [
  { key: "1", icon: "", label: <Link href="/dashboard">Dashboard</Link> },
  { key: "2", icon: "", label: <Link href="/reconciliation">Reconciliation</Link> },
  { key: "3", icon: "", label: <Link href="/report">Report</Link> },
  {
    key: "Sub1",
    label: "Settings",
    icon: "",
    children: [
      { key: "5", label: <Link href="/project">Project</Link> },
      { key: "6", label: <Link href="/schedule-process">Schedule Process</Link> },
    ],
  },
];

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
      <Menu className="!bg-primary !text-white" style={{ marginTop: "15px", color: "white" }} mode="inline" defaultSelectedKeys={["4"]} items={MenuItems} />
    </Sider>
  );
};

export default AppSidebar;
