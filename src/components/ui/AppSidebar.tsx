"use client";

import { useAppSelector } from "@/lib/redux/Store";
import { RightCircleFilled } from "@ant-design/icons";
import { Button, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  const authState = useAppSelector((state) => state.auth);
  console.log(authState);

  return (
    <Sider className="" width={250} collapsible={true}>
      {/* <div className="absolute top-[20px] left-[175px] z-10 bg-red-500">Button</div> */}
      {/* <RightCircleFilled className="absolute top-[25px] left-[235px] z-10 text-black" style={{ fontSize: "25px", color: "white" }} /> */}

      <div className="flex justify-center m-5 overflow-hidden relative">
        <Link href="/">
          <Image src="/fps-icon-white.svg" alt="logo" width={100} height={42} />
        </Link>
      </div>

      <Menu className="!bg-inherit !mt-5" mode="inline" items={MenuItems} onClick={handleMenuClick} />
    </Sider>
  );
};

export default AppSidebar;
