"use client";

import { BellFilled, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Avatar from "antd/es/avatar/avatar";
import { Header } from "antd/es/layout/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppNavbar = () => {
  // const dispatch = useDispatch();
  // const collapsed = useSelector((state: any) => state.sider.collapsed);
  return (
    <Header className="!bg-primary flex flex-row justify-between items-center">
      <Link href="/">
        <Image src="/fps-icon-white.svg" alt="logo" width={100} height={42} />
      </Link>
      <Button className="!hidden" type="primary" onClick={() => {}}>
        <MenuUnfoldOutlined />
        <MenuUnfoldOutlined />
      </Button>
      <div className="flex flex-row items-center gap-5 text-2xl text-white">
        <BellFilled />
        <p className="text-lg">Admin</p>
        <Avatar size={40} alt="avatar" src="" />
      </div>
    </Header>
  );
};

export default AppNavbar;
