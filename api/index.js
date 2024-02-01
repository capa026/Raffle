import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import tablesRoute from "./routes/tables.js";
//Init
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (error) {
    throw error;
  }
};

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/tables", tablesRoute);

//Errors

//Run
app.listen("8000", () => {
  connect();
  console.log("Connected to database.");
});
