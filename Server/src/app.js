import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/user.routes.js";
dotenv.config();
const app = express();
console.log(process.env.CORS_ORIGIN)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/v1/users", userRoute);

export default app;
