import { connect } from '@/utils/db';
import { NextResponse } from 'next/server';
import User from '../../../models/User';
import data from '@/utils/data';

export async function GET() {
  await connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  return NextResponse.json({ message: 'seeded successfully' });
}
