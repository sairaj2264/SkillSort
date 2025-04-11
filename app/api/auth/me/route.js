import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    // Get token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    
    console.log('Token from cookies:', token ? 'present' : 'missing'); // Debug log

    if (!token) {
      console.log('No token found in cookies'); // Debug log
      return NextResponse.json({ user: null }, { status: 401 });
    }

    const secret = process.env.JWT_SECRET;
    console.log('JWT Secret available:', !!secret); // Debug log

    if (!secret) {
      console.log('JWT Secret is missing'); // Debug log
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    try {
      const decoded = verify(token, secret);
      console.log('Token decoded successfully:', decoded); // Debug log
      
      // Fetch user from database
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        }
      });

      if (!user) {
        console.log('User not found in database'); // Debug log
        return NextResponse.json({ user: null }, { status: 401 });
      }

      console.log('User found:', user); // Debug log
      return NextResponse.json({ user });
    } catch (error) {
      console.error('Token verification error:', error.message); // Debug log
      return NextResponse.json({ user: null }, { status: 401 });
    }
  } catch (error) {
    console.error('Error in /api/auth/me:', error); // Debug log
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 