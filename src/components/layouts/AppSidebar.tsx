"use client";

import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import "./AppSidebar.Style.css";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuItems } from "@/lib/SidebarMenuItems";
import { useAppDispatch, useAppSelector } from "@/lib/redux/useRedux";

// Handle Menu Click
const handleMenuClick = (e: any) => {
  console.log("click ", e);
};

const AppSidebar = () => {
  const dispatch = useAppDispatch();

  return (
    <Sider
      className=""
      width={250}
      collapsible
      style={{ overflow: "auto", height: "100vh", position: "sticky", top: 0, left: 0 }}
    >
      <div className="flex justify-center m-5 overflow-hidden relative">
        <Link href="/">
          <Image src="/fps-icon-white.svg" alt="logo" width={100} height={42} />
        </Link>
      </div>

      <Menu
        className="!bg-inherit !mt-5 text-white"
        style={{}}
        mode="inline"
        items={MenuItems}
        onClick={handleMenuClick}
      />
    </Sider>
  );
};

export default AppSidebar;
