import { BellOutlined } from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import { Header } from "antd/es/layout/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppNavbar = () => {
  return (
    <Header className="!bg-primary flex flex-row justify-between items-center">
      <Link href="/">
        <Image src="/fps-icon-white.svg" alt="logo" width={100} height={50} />
      </Link>
      <div className="flex flex-row items-center gap-5 text-2xl text-white">
        <BellOutlined />
        <Avatar size={30} alt="avatar" src="/bg-login" />
      </div>
    </Header>
  );
};

export default AppNavbar;
