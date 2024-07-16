import Navbar from "@/components/layouts/AppNavbar";
import Sidebar from "@/components/layouts/AppSidebar";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";

type PropsTypes = {
  readonly children: React.ReactNode;
};

const MainPageLayout = ({ children }: PropsTypes) => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Navbar />
        {/* <Content style={{ minHeight: "calc(100vh - 64px)" }} className="m-8 bg-white rounded-lg p-5"> */}
        <Content style={{ minHeight: "calc(100vh - 64px)" }} className="m-5">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainPageLayout;
