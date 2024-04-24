// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import useWorkoutContext from "../../hooks/useWorkoutContext.jsx";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";
import WorkoutDetail from "../Detail/WorkoutDetail.jsx";

const Workout = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:8080/api/v1/workout");
    const result = await res.json();
    if (res.ok) {
      setLoading(false);
      dispatch({ type: "SET WORKOUT", payload: result.data });
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fromatedate = (d) => {
    const date = new Date(d);
    return date.toLocaleString();
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delelet");
    if (confirm) {
      axios
        .delete(`http://localhost:8080/api/v1/workout/${id}`)
        .then((res) => {
          console.log(res);
          dispatch({ type: "DELETE WORKOUT", payload: res });
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="w-[60%]">
      {loading ? (
        <Loading />
      ) : (
        <WorkoutDetail
          handleDelete={handleDelete}
          workouts={workouts}
          fromatedate={fromatedate}
        />
      )}
    </div>
  );
};

export default Workout;
