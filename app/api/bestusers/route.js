import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    // Get the domain from the query parameters
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain');

    console.log('Fetching best users for domain:', domain);

    // Validate the domain input
    if (!domain || !['fullstack', 'ml', 'devops'].includes(domain.toLowerCase())) {
      console.log('Invalid domain:', domain);
      return NextResponse.json(
        { error: 'Invalid domain. Must be one of: fullstack, ml, devops' },
        { status: 400 }
      );
    }

    try {
      // Query the top 10 users for the specified domain
      const topUsers = await prisma.details.findMany({
        where: {
          domain: domain.toLowerCase(),
        },
        orderBy: {
          score: 'desc',
        },
        take: 10,
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
        },
      });

      console.log('Found users:', topUsers.length);
      return NextResponse.json(topUsers);
    } catch (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { error: 'Database error', details: dbError.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in /api/bestusers:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
