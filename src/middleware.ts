// Middleware for Authorization
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware for Authorization");
  let cookie = request.cookies.get("token");

  console.log("Cookie", cookie);

  if (!request.cookies.has("token")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
