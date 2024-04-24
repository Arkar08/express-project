// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Workout from "../../components/Workout/Workout";
import WorkoutForm from "../../components/Form/WorkoutForm";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-[100%] justify-between">
        <Workout />
        <WorkoutForm />
      </div>
    </>
  );
};

export default Home;
