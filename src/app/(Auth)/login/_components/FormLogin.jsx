"use client";

import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FormLogin = () => {
  const router = useRouter();
  // On Finish Form
  const onFinish = (values) => {
    console.log("Success:", values);
    router.push("/dashboard");
  };

  return (
    <Form name="LoginForm" onFinish={onFinish}>
      <Form.Item name="username" rules={[{ required: true, message: "Please input your username!" }]}>
        <Input size="large" placeholder="Username / Email" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
        <Input.Password size="large" placeholder="Password" />
      </Form.Item>
      <div className="flex justify-end mb-5">
        <Link href="/forgot-password">Forgot Password?</Link>
      </div>
      <Button type="primary" htmlType="submit" className="w-full">
        Login
      </Button>
    </Form>
  );
};

export default FormLogin;
