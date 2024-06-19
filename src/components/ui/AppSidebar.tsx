import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

const MenuItems: MenuItem[] = [
  {
    key: "1",
    icon: "",
    label: (
      <Link href="/dashboard" className="text-white">
        Dashboard
      </Link>
    ),
  },
  { key: "2", icon: "", label: <Link href="/reconciliation">Reconciliation</Link> },
  { key: "3", icon: "", label: <Link href="/report">Report</Link> },
  {
    key: "Sub1",
    label: "Settings",
    icon: "",
    children: [
      { key: "5", label: <Link href="/settings/project">Project</Link> },
      { key: "6", label: <Link href="/settings/schedule-process">Schedule Process</Link> },
    ],
  },
];

const AppSidebar = () => {
  // const collapsed = useSelector((state: any) => state.sider.collapsed);

  return (
    <Sider className="!bg-primary">
      <Menu className="!bg-primary" style={{ marginTop: "15px", fontSize: "16px" }} mode="inline" defaultSelectedKeys={["4"]} items={MenuItems} />
    </Sider>
  );
};

export default AppSidebar;
