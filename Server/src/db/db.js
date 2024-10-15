import mongoose from "mongoose";
const db = async () => {
  try {
    const conn = await mongoose.connect("mongodb://mongo:27017/Image");
    console.log(conn);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
export default db;
