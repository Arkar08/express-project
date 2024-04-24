// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const WorkoutDetail = ({ handleDelete, workouts, fromatedate }) => {
  return (
    <div>
      {workouts &&
        // eslint-disable-next-line react/prop-types
        workouts.map((w) => {
          return (
            <div
              className="w-[100%] h-[150px] border-2 mt-6 mx-6 bg-black shadow-md rounded-md flex items-center justify-between p-8"
              key={w._id}
            >
              <div>
                <h2 className="text-2xl text-red-600">
                  Name:{" "}
                  <span className="text-xl font-semibold text-white px-4">
                    {w.name}
                  </span>
                </h2>
                <h3 className="text-2xl text-red-600">
                  Weight:{" "}
                  <span className="text-xl font-semibold text-white px-1">
                    {w.weight}kg
                  </span>
                </h3>
                <h3 className="text-2xl text-red-600">
                  Height:{" "}
                  <span className="text-xl font-semibold text-white px-2">
                    {w.height}ft
                  </span>
                </h3>
                <h3 className="text-2xl text-red-600">
                  Date:
                  <span className="text-xl font-semibold text-white px-8">
                    {fromatedate(w.createdAt)}
                  </span>
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <button
                  className="text-white p-2 bg-red-500 rounded-md"
                  onClick={() => handleDelete(w._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default WorkoutDetail;
