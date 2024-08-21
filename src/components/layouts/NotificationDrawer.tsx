import { toggleNotif } from "@/lib/redux/slice/TriggerUI.Slice";
import { Drawer } from "antd";
import React from "react";

const NotificationDrawer = () => {
  return (
    <Drawer
      title="Notification"
      mask={false}
      style={{
        background: "rgba(255, 255, 255, 0.6)",
        borderRadius: "16px",
        boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
      // onClose={() => dispatch(toggleNotif(false))}
      // open={isOpenNotif}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default NotificationDrawer;
