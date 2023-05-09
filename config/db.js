import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log(process.env.URI)
    const conn = await mongoose.connect(process.env.URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`${err}`.red);
  }
};

export default connectDB;