import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // Get token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const { resumeUrl, githubUrl, leetcodeUrl, codechefUrl , score  ,domain} = await request.json();

    // Validate input
    if (!resumeUrl || !githubUrl || !leetcodeUrl || !codechefUrl ) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if user already has details
    // console.log(score);
    const existingDetails = await prisma.details.findUnique({
      where: { userid: decoded.userId }
    });

    if (existingDetails) {
      // Update existing details
      const updatedDetails = await prisma.details.update({
        where: { userid: decoded.userId },
        data: {
          resumeUrl,
          githubUrl,
          leetcodeUrl,
          codechefUrl,
          score,
          domain
        }
      });

      return NextResponse.json(updatedDetails);
    } else {
      // Create new details
      const newDetails = await prisma.details.create({
        data: {
          userid: decoded.userId,
          resumeUrl,
          githubUrl,
          leetcodeUrl,
          codechefUrl,
          domain
        }
      });

      return NextResponse.json(newDetails);
    }
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
