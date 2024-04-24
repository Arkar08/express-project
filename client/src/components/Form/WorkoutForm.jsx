// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import useWorkoutContext from "../../hooks/useWorkoutContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();
  const [newWrok, setNewWork] = useState({
    name: "",
    weight: "",
    height: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setNewWork({
      ...newWrok,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newWrok.name || !newWrok.weight || !newWrok.height) {
      setError(true);
    }
    axios
      .post("http://localhost:8080/api/v1/workout", newWrok)
      .then((res) => {
        window.location.reload();
        dispatch({ type: "CREATE WORKOUT", payload: res });
        setNewWork("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-[30%] mt-6 mx-8">
      <form
        className="w-[100%] bg-black h-[330px] shadow-lg rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-white text-3xl font-bold py-2 ">
          Workout Form
        </h2>
        <div className="flex flex-col justify-center px-8 w-[100%] h-[50px]">
          <label className="text-2xl font-bold text-red-600">Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={newWrok.name}
            name="name"
            className="w-[80%] h-[100%} py-1 px-2 border-none outline-none rounded-md my-2"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-center px-8 w-[100%] h-[50px] my-4">
          <label className="text-2xl font-bold text-red-600 mt-4">
            Weight:
          </label>
          <input
            type="number"
            placeholder="Weight"
            name="weight"
            value={newWrok.weight}
            className="w-[80%] h-[100%} py-1 px-2 my-2 border-none outline-none rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col justify-center px-8 w-[100%] h-[50px]">
          <label className="text-2xl font-bold text-red-600 mt-4">
            Height:
          </label>
          <input
            type="number"
            placeholder="Height"
            name="height"
            value={newWrok.height}
            className="w-[80%] h-[100%} py-1 px-2 mt-2 border-none outline-none rounded-md"
            onChange={handleChange}
          />
        </div>
        <div className="my-8 flex items-center justify-center mx-auto">
          <input
            type="submit"
            className="w-[100px] py-2 text-xl font-bold bg-blue-500 text-white rounded-md shadow-lg border-none outline-none cursor-pointer"
          />
        </div>
      </form>
      {error && (
        <div>
          <h2 className="text-xl font-bold text-blue-600">Can not match!</h2>
        </div>
      )}
    </div>
  );
};

export default WorkoutForm;
