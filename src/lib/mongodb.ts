import { connect } from "mongoose";

export const connectToDB = async () => {
  try {
    await connect(`${process.env.NEXT_PUBLIC_MONGODB_URL}`);
    console.log("MongoDB connection is done");
  } catch (err: any) {
    console.log(err);
  }
};
