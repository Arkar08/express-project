import mongoose from "mongoose";

const Scheme = mongoose.Schema;

const workout = new Scheme(
  {
    name: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Workout = mongoose.model("workout", workout);

export default Workout;
