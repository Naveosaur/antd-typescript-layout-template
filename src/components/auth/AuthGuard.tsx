"use client";

import { useAppSelector } from "@/lib/redux/useRedux";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

type AuthGuardProps = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isLogin } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const pathname = usePathname();
  const hasToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (!isLogin || !hasToken) {
      if (pathname !== "/login") {
        router.push("/login");
      }
    } else if (pathname === "/login" || pathname === "/") {
      router.push("/dashboard");
    }
  }, [isLogin, hasToken, pathname, router]);

  if (!isLogin || !hasToken) {
    if (pathname !== "/login") {
      return null;
    }
  } else if (pathname === "/login") {
    return null;
  }

  return children;
};

export default AuthGuard;
