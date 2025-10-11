import { connect } from "mongoose";

export const connectToDB = async () => {
  try {
    await connect(`mongodb://localhost:27017/market`);
    console.log("MongoDB connection is done");
  } catch (err: any) {
    console.log(err);
  }
};
