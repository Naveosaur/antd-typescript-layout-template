import Navbar from "@/components/ui/AppNavbar";
import Sidebar from "@/components/ui/AppSidebar";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

type PropsTypes = {
  readonly children: React.ReactNode;
};

const MainPageLayout = ({ children }: PropsTypes) => {
  return (
    <Layout className="">
      <Navbar />
      <Layout hasSider className="">
        <Sidebar />
        <Layout className="!bg-gray-300">
          <Content style={{ minHeight: "calc(100vh - 64px)" }} className="m-8 bg-white rounded-lg p-5">
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainPageLayout;
