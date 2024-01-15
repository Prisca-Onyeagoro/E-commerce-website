import { Mongoose } from 'mongoose';

const connection = {};

const connect = async () => {
  try {
    const uri = process.env.MONGO_URI;
    Mongoose.connect(uri);
    console.log('connection successful');
  } catch (error) {}
};
