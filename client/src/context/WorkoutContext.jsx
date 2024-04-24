import { createContext, useReducer } from "react";
// eslint-disable-next-line no-unused-vars
import React from "react";

export const WorkoutContext = createContext();
const initialState = {
  workouts: null,
};

// eslint-disable-next-line react-refresh/only-export-components
export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET WORKOUT":
      return {
        workouts: action.payload,
      };
    case "CREATE WORKOUT":
      return {
        workouts: [action.payload, ...state.workout],
      };
    case "DELETE WORKOUT":
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};
// eslint-disable-next-line react/prop-types
export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, initialState);
  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
