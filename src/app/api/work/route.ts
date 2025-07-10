import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const workExperiences = await prisma.workExperience.findMany({
    orderBy: { id: 'asc' }
  });
  return NextResponse.json(workExperiences);
}