import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  avatar: {
    type: String,
    required: true,
  },
});
export const User = mongoose.model("User", userSchema);
