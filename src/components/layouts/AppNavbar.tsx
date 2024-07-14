"use client";

import { BellFilled } from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import { Header } from "antd/es/layout/layout";
import ProfileDrawer from "./ProfileDrawer";
import NotificationDrawer from "./NotificationDrawer";
import { useAppDispatch } from "@/lib/redux/Store";
import { toggleNotif, toggleProfile } from "@/lib/redux/slice/TriggerUI.Slice";

const AppNavbar = () => {
  const dispatch = useAppDispatch();

  return (
    <Header className="flex flex-row justify-end" style={{ background: "white" }}>
      <div className="flex flex-row items-center gap-5 text-2xl text-gray-500">
        <BellFilled className="hover:scale-110 hover:shadow-md hover:cursor-pointer" onClick={() => dispatch(toggleNotif(true))} />
        <Avatar size={35} alt="avatar" src="" className="hover:scale-110 hover:shadow-md hover:cursor-pointer" onClick={() => dispatch(toggleProfile(true))} />
      </div>

      {/* Drawer */}
      <ProfileDrawer />
      <NotificationDrawer />
    </Header>
  );
};

export default AppNavbar;
