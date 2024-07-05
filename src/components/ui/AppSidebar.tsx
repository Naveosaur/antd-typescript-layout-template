"use client";

import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import "./AppSidebar.Style.css";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/Store";
import { toggleSidebar } from "@/lib/redux/slice/TriggerUI.Slice";

// Menu items
type MenuItem = Required<MenuProps>["items"][number];

const MenuItems: MenuItem[] = [
  {
    key: "1",
    icon: "",
    label: "Dashboard",
  },
  { key: "2", icon: "", label: "Menu 2" },
  { key: "3", icon: "", label: "Menu 3" },
  {
    key: "Sub1",
    label: "Settings",
    icon: "",
    children: [
      { key: "5", label: "Settings 1" },
      { key: "6", label: "Settings 2" },
    ],
  },
];

// Handle Menu Click
const handleMenuClick = (e: any) => {
  console.log("click ", e);
};

const AppSidebar = () => {
  const isCollapse = useAppSelector((state) => state.triggerUI.toggleSidebar);
  const dispatch = useAppDispatch();

  return (
    <Sider className="" width={250} collapsible>
      {/* {isCollapse ? (
        <RightCircleFilled
          className={`absolute top-[25px] left-[65px] z-10 text-black border transition-transform duration-300 ${isCollapse ? "rotate-180" : ""}`}
          style={{ fontSize: "25px", color: "white" }}
          onClick={() => dispatch(toggleSidebar(false))}
        />
      ) : (
        <LeftCircleFilled
          className={`absolute top-[25px] left-[235px] z-10 text-black border transition-transform duration-300 ${isCollapse ? "" : "rotate-180"}`}
          style={{ fontSize: "25px", color: "white" }}
          onClick={() => dispatch(toggleSidebar(true))}
        />
      )} */}
      <div className="flex justify-center m-5 overflow-hidden relative">
        <Link href="/">
          <Image src="/fps-icon-white.svg" alt="logo" width={100} height={42} />
        </Link>
      </div>

      <Menu className="!bg-inherit !mt-5 text-white" style={{}} mode="inline" items={MenuItems} onClick={handleMenuClick} />
    </Sider>
  );
};

export default AppSidebar;
