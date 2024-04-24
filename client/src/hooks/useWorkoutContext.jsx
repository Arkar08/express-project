// eslint-disable-next-line no-unused-vars
import React from "react";
import { WorkoutContext } from "../context/WorkoutContext.jsx";
import { useContext } from "react";

const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw Error("this context is not provider");
  }
  return context;
};

export default useWorkoutContext;
