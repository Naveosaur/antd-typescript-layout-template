import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const MenuItems: MenuItem[] = [
  {
    key: "DashboardGroup",
    label: "Dashboard",
    type: "group",
    children: [{ key: "dashboard", icon: "", label: "Dashboard" }],
  },

  { key: "2", icon: "", label: "Menu 2" },
  { key: "3", icon: "", label: "Menu 3" },
  {
    key: "SettingsGroup",
    label: "Settings",
    type: "group",
    children: [
      { key: "settings", label: "Settings" },
      {
        key: "ConfigurationGroup",
        label: "Configuration",
        children: [
          { key: "config1", label: "Config" },
          { key: "config2", label: "Config 2" },
        ],
      },
    ],
  },
];
