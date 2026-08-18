import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((request) => {
  const isLoggedIn = Boolean(request.auth?.user);
  const isLoginRoute = request.nextUrl.pathname.startsWith("/admin/login");

  if (!isLoggedIn && !isLoginRoute) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (isLoggedIn && isLoginRoute) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*"],
};
