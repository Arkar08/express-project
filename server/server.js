/* eslint-disable no-undef */
import express from "express";
import cors from "cors";
import workoutRouter from "./src/routes/workout.js";
import mongoose from "mongoose";

//local port
const PORT = process.env.PORT || 8080;
// app setup;
const app = express();
// json convert
app.use(express.json());
//cors use
app.use(cors());

//routes
app.use("/api/v1/workout", workoutRouter);

//db connected
mongoose
  .connect("mongodb://localhost:27017/workout")
  .then(() => {
    //server run
    app.listen(PORT, () => {
      console.log(`db is connected,server is running ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
