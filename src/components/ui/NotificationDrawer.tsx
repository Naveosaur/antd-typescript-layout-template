import { setOpenNotification } from "@/lib/redux/slice/Drawer.Slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/Store";
import { Drawer } from "antd";
import React from "react";

const NotificationDrawer = () => {
  const isOpenNotification = useAppSelector((state) => state.drawer.openNotification);
  const dispatch = useAppDispatch();

  return (
    <Drawer
      title="Notification"
      mask={false}
      style={{ background: "rgba(255, 255, 255, 0.6)", borderRadius: "16px", boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)", backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)", border: "1px solid rgba(255, 255, 255, 0.3)" }}
      onClose={() => dispatch(setOpenNotification(false))}
      open={isOpenNotification}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default NotificationDrawer;
