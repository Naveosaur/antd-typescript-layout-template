"use client";

import http from "@/utils/AxiosInstance";
import { Button, Form, Input, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { encrypt } from "@/utils/Cryptograph";
const FormLogin = () => {
  const router = useRouter();

  // On Finish Form
  const onFinish = async (values: any) => {
    try {
      const res = await http.post("/auth/signIn", {
        email: values.username,
        password: values.password,
      });

      if (res.status === 200) {
        Cookies.set("token", encrypt(res.data.data.TOKEN));
        Cookies.set("user", JSON.stringify(res.data.data));
        router.push("/dashboard");
        message.success("Login Success");
        setTimeout(() => {
          message.destroy();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      message.error("Login Failed");
      setTimeout(() => {
        message.destroy();
      }, 5000);
    }
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
