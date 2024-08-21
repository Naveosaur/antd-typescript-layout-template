import { Result } from "antd";
import AppSidebar from "@/components/layouts/AppSidebar";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import AppHeader from "@/components/layouts/AppHeader";

const NotFound = () => {
  return (
    <Layout>
      <AppSidebar />
      <Layout>
        <AppHeader />
        <Content style={{ minHeight: "calc(100vh) - 120px" }} className="m-5 ">
          <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />
        </Content>
      </Layout>
    </Layout>
  );
};

export default NotFound;
