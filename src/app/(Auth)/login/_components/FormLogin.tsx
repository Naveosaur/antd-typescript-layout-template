"use client";

import http from "@/utils/AxiosInstance";
import { Button, Form, Input, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { encrypt } from "@/utils/Cryptograph";
import { useState } from "react";
import { setLogin } from "@/lib/redux/slice/Auth.Slice";
import Cookies from "js-cookie";
import { useAppDispatch } from "@/lib/redux/useRedux";
import { showErrorMessage, showSuccessMessage } from "@/components/ui/ShowMessage";

const FormLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  // On Finish Form
  const onFinish = async (values: any) => {
    setIsLoading(true);

    try {
      const res = await http.post("/auth/signIn", {
        email: values.username,
        password: values.password,
      });

      if (res.status === 200) {
        // If using cookies
        Cookies.set("token", encrypt(res.data.data.TOKEN));
        Cookies.set("user", JSON.stringify(res.data.data));

        dispatch(
          setLogin({
            isLogin: true,
            token: encrypt(res.data.data.TOKEN),
            userCreds: res.data.data,
          })
        );

        setIsLoading(false);

        router.push("/dashboard");

        showSuccessMessage("Login Success");
      }
    } catch (error) {
      showErrorMessage("Login Failed");
    }
  };

  return (
    <Form name="LoginForm" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input size="large" placeholder="Username / Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password size="large" placeholder="Password" />
      </Form.Item>
      <div className="flex justify-end mb-5">
        <Link href="/forgot-password">Forgot Password?</Link>
      </div>
      <Button type="primary" htmlType="submit" className="w-full" disabled={isLoading}>
        Login
      </Button>
    </Form>
  );
};

export default FormLogin;
