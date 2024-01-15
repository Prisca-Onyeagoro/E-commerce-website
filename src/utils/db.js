import { Mongoose } from 'mongoose';
import { NextResponse } from 'next/server';

const connection = {};

const connect = async () => {
  try {
    const uri = process.env.MONGO_URI;
    Mongoose.connect(uri);
    console.log('connection successful');
    NextResponse.json({ message: 'connection successful' }, { status: 500 });
  } catch (error) {
    console.log('connection failed', error.message);
    NextResponse.json({ message: 'connection successful' }, { status: 500 });
  }
};
