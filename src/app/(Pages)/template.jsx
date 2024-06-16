import Navbar from "@/components/ui/AppNavbar";
import Sidebar from "@/components/ui/AppSidebar";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

const MainPageLayout = ({ children }) => {
  return (
    <Layout className="">
      <Navbar />
      <Layout hasSider className="">
        <Sidebar />
        <Layout className="">
          <Content style={{ padding: "16px", minHeight: "calc(100vh - 64px)" }}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainPageLayout;
