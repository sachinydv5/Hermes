import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Define paths that are considered public (no auth required)
  const isPublicPath = path === "/login" || path === "/api/auth/set-token"

  // Get the token from the cookies
  const token = request.cookies.get("auth-token")?.value || ""

  // Redirect logic
  if (!isPublicPath && !token) {
    // Redirect to login if trying to access a protected route without a token
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (isPublicPath && token) {
    // Redirect to dashboard if trying to access login with a valid token
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ["/((?!api/auth/set-token|_next/static|_next/image|favicon.ico).*)"],
}

