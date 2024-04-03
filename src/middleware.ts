import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// list all matching paths
export const config = {
  matcher: ["/"],
};

// middleware function
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/about", request.url));
  }
}