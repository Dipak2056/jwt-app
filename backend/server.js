import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import AuthRoute from "./Routes/AuthRoute.js";

const app = express();

const PORT = process.env.PORT || 4000;
mongoose
  .connect("mongodb://localhost:27017/jwt", {})
  .then(() => {
    console.log("DB connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/", AuthRoute);

app.listen(PORT, () => {
  console.log("server started at PORT" + PORT);
});
