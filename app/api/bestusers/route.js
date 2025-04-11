import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    // Get the domain from the query parameters
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get('domain');

    // Validate the domain input
    if (!domain || !['fullstack', 'ml', 'devops'].includes(domain.toLowerCase())) {
      return NextResponse.json(
        { error: 'Invalid domain. Must be one of: fullstack, ml, devops' },
        { status: 400 }
      );
    }
   
  

    // Query the top 10 users for the specified domain
    const topUsers = await prisma.details.findMany({
      where: {
        domain: domain,
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

    return NextResponse.json(topUsers);
  } catch (error) {
    console.error('Error fetching top users:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
