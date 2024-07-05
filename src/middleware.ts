import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  // If the user is not logged in and tries to access any page, redirect to login
  if (!token) {
    if (request.nextUrl.pathname !== "/login") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // If the user is logged in and tries to access the root, redirect to dashboard
  if (token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // If the user is logged in and tries to access the login page, redirect to dashboard
    if (request.nextUrl.pathname === "/login") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // Continue with the request
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/login"],
};
