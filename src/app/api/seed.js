import { connect } from '@/utils/db';
import { NextResponse } from 'next/server';

const handler = async (request) => {
  await connect();
};
