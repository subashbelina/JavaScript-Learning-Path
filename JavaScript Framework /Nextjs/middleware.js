/*
  Middleware
  ----------
  Runs before a request completes.
  Common uses: auth checks, redirects, headers.
  File: middleware.js at project root (or src/).
*/

const middlewareExample = `
// middleware.js — project root

import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get("token");

  // Protect /dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
`;

console.log("--- Middleware ---");
console.log("Runs on every matched request before page loads");
console.log("File: middleware.js at project root");
console.log("Use for: auth, redirects, logging, headers");
console.log("matcher: which paths to run on");
console.log("");
console.log("Example:\n", middlewareExample);
