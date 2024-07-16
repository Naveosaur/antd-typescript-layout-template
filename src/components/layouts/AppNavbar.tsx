"use client";

import { BellFilled } from "@ant-design/icons";
import Avatar from "antd/es/avatar/avatar";
import { Header } from "antd/es/layout/layout";
import ProfileDrawer from "./ProfileDrawer";
import NotificationDrawer from "./NotificationDrawer";
import { useAppDispatch } from "@/lib/redux/Store";
import { toggleNotif, toggleProfile } from "@/lib/redux/slice/TriggerUI.Slice";
import { useEffect, useState } from "react";

const AppNavbar = () => {
  const dispatch = useAppDispatch();
  const [bgStyle, setBgStyle] = useState({
    background: "rgba(255, 255, 255, 0.6)",
    boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
  });

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgStyle({
        ...bgStyle,
        background: "rgba(255, 255, 255, 0.8)",
      });
    } else {
      setBgStyle({
        ...bgStyle,
        background: "rgba(255, 255, 255, 0.8)",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Header className="flex flex-row justify-end" style={{ position: "sticky", top: 0, zIndex: 1, ...bgStyle }}>
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
