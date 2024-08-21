import { setLogout } from "@/lib/redux/slice/Auth.Slice";
import { toggleProfile } from "@/lib/redux/slice/TriggerUI.Slice";
import { useAppDispatch } from "@/lib/redux/useRedux";
import { Button, Drawer } from "antd";

const ProfileDrawer = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setLogout());
    window.location.href = "/login";
  };

  return (
    <Drawer
      title="Profile"
      mask={false}
      style={{
        background: "rgba(255, 255, 255, 0.6)",
        borderRadius: "16px",
        boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
      onClose={() => dispatch(toggleProfile(false))}
      // open={isOpenProfile}
      // closable={false}
    >
      <div className="flex justify-center">
        <Button className="w-[100vw]" size="large" danger onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </Drawer>
  );
};

export default ProfileDrawer;
