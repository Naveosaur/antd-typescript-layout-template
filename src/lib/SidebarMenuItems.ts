import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const MenuItems: MenuItem[] = [
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
