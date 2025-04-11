import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './utils/jwt';

export async function middleware(request: NextRequest) {
  // List of public routes that don't require authentication
  const publicRoutes = ['/api/auth/login', '/api/auth/signup'];
  
  // Check if the requested path is a public route
  if (publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Check for auth token in headers
  const token = request.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json(
      { error: 'Authentication required' },
      { status: 401 }
    );
  }

  // Verify token
  const decoded = verifyToken(token);
  if (!decoded) {
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    );
  }

  // Add user info to request headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-id', decoded.id.toString());
  requestHeaders.set('x-user-role', decoded.role);

  // Continue with the request
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Configure which routes to run middleware on
export const config = {
  matcher: '/api/:path*',
}; 