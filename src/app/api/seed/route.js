import { NextResponse } from 'next/server';

export async function POST(request) {
  return new NextResponse(
    JSON.stringify({ message: 'server error', status: 200 })
  );
}
